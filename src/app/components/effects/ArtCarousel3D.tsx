import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CAROUSEL_IMAGES } from "../../data/portfolioData";

const CARD_W = 3.8;
const CARD_H = 2.4;

export default function ArtCarousel3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotRef = useRef(0);
  const currentRotRef = useRef(0);
  const rafRef = useRef<number>(0);
  const dragRef = useRef({
    active: false,
    lastX: 0,
    velocity: 0,
    idleTime: 0,
  });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let cleanupFn: (() => void) | undefined;
    try {
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        52,
        mount.clientWidth / mount.clientHeight,
        0.1,
        200
      );
      camera.position.set(0, 0, 15);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
      );
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const onResize = () => {
        if (!mount) return;
        camera.aspect = mount.clientWidth / mount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mount.clientWidth, mount.clientHeight);
      };
      window.addEventListener("resize", onResize);
      onResize();

      // Fog for depth
      scene.fog = new THREE.FogExp2(0x08080f, 0.038);

      // Lighting
      const ambient = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambient);
      const frontLight = new THREE.PointLight(
        0x9090ff,
        3.0,
        50
      );
      frontLight.position.set(0, 4, 12);
      scene.add(frontLight);
      const rimLight = new THREE.PointLight(0xff2d7a, 1.4, 35);
      rimLight.position.set(-10, -2, 5);
      scene.add(rimLight);
      const fillLight = new THREE.PointLight(0x00e5c8, 0.8, 30);
      fillLight.position.set(10, 2, 5);
      scene.add(fillLight);

      // Carousel — all landscape cards in a circle
      const COUNT = CAROUSEL_IMAGES.length;
      const RADIUS = 6.8;

      // Each card + its edge lines stored together for scale updates
      const cardData: {
        mesh: THREE.Mesh;
        edges: THREE.LineSegments;
        baseY: number;
      }[] = [];
      const group = new THREE.Group();
      scene.add(group);

      const loader = new THREE.TextureLoader();

      CAROUSEL_IMAGES.forEach((url, i) => {
        const angle = (i / COUNT) * Math.PI * 2;

        const geo = new THREE.PlaneGeometry(CARD_W, CARD_H);

        const placeholderMat = new THREE.MeshStandardMaterial({
          color: 0x12121f,
          roughness: 0.85,
          metalness: 0.1,
          transparent: true,
          opacity: 0.7,
        });

        const mesh = new THREE.Mesh(geo, placeholderMat);
        const baseY = i % 2 === 0 ? 0.18 : -0.18;
        mesh.position.set(
          Math.sin(angle) * RADIUS,
          baseY,
          Math.cos(angle) * RADIUS
        );
        mesh.rotation.y = -angle;

        loader.load(url, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.minFilter = THREE.LinearMipmapLinearFilter;
          tex.generateMipmaps = true;

          // Prevent distortion: apply object-fit: cover mapping in UV coordinates
          if (tex.image && tex.image.width && tex.image.height) {
            const imgAspect = tex.image.width / tex.image.height;
            const planeAspect = CARD_W / CARD_H;

            if (imgAspect > planeAspect) {
              // Image is wider than 3D card -> crop left/right sides, keep full vertical height
              const scale = planeAspect / imgAspect;
              tex.repeat.set(scale, 1);
              tex.offset.set((1 - scale) / 2, 0);
            } else {
              // Image is taller than 3D card -> crop top/bottom, keep full horizontal width
              const scale = imgAspect / planeAspect;
              tex.repeat.set(1, scale);
              tex.offset.set(0, (1 - scale) / 2);
            }
            tex.needsUpdate = true;
          }

          const mat = new THREE.MeshStandardMaterial({
            map: tex,
            roughness: 0.45,
            metalness: 0.06,
            transparent: true,
            opacity: 0,
          });
          mesh.material = mat;
          let op = 0;
          const fadeIn = () => {
            op = Math.min(op + 0.02, 1);
            (
              mesh.material as THREE.MeshStandardMaterial
            ).opacity = op;
            if (op < 1) requestAnimationFrame(fadeIn);
          };
          fadeIn();
        });

        // Edge frame
        const edgeGeo = new THREE.EdgesGeometry(
          new THREE.BoxGeometry(
            CARD_W + 0.07,
            CARD_H + 0.07,
            0.01
          )
        );
        const edgeMat = new THREE.LineBasicMaterial({
          color: 0x3a3a60,
          transparent: true,
          opacity: 0.6,
        });
        const edges = new THREE.LineSegments(edgeGeo, edgeMat);
        edges.position.copy(mesh.position);
        edges.rotation.copy(mesh.rotation);

        group.add(mesh);
        group.add(edges);
        cardData.push({ mesh, edges, baseY });
      });

      // ── Pointer / touch drag ──────────────────────────────────────────────
      const getClientX = (e: MouseEvent | TouchEvent) =>
        "touches" in e
          ? e.touches[0].clientX
          : (e as MouseEvent).clientX;

      const onPointerDown = (e: MouseEvent | TouchEvent) => {
        dragRef.current.active = true;
        dragRef.current.lastX = getClientX(e);
        dragRef.current.velocity = 0;
        dragRef.current.idleTime = 0;
        mount.style.cursor = "grabbing";
      };
      const onPointerMove = (e: MouseEvent | TouchEvent) => {
        const cx = getClientX(e);
        // Mouse parallax (only when not dragging)
        if (!dragRef.current.active && "clientX" in e) {
          mouseRef.current.x =
            (e.clientX / window.innerWidth - 0.5) * 2;
          mouseRef.current.y =
            (e.clientY / window.innerHeight - 0.5) * 2;
        }
        if (!dragRef.current.active) return;
        const dx = cx - dragRef.current.lastX;
        dragRef.current.lastX = cx;
        // Sensitivity: one full screen width ≈ 2π rotation
        const delta = (dx / window.innerWidth) * Math.PI * 1.4;
        dragRef.current.velocity = delta;
        targetRotRef.current += delta;
        currentRotRef.current = targetRotRef.current; // snap while dragging
      };
      const onPointerUp = () => {
        dragRef.current.active = false;
        dragRef.current.idleTime = 0;
        mount.style.cursor = "grab";
      };

      mount.addEventListener("mousedown", onPointerDown);
      mount.addEventListener(
        "touchstart",
        onPointerDown as EventListener,
        { passive: true }
      );
      window.addEventListener(
        "mousemove",
        onPointerMove as EventListener,
        { passive: true }
      );
      window.addEventListener(
        "touchmove",
        onPointerMove as EventListener,
        { passive: true }
      );
      window.addEventListener("mouseup", onPointerUp);
      window.addEventListener("touchend", onPointerUp);
      mount.style.cursor = "grab";

      const camTarget = new THREE.Vector3();
      let lastTime = 0;

      const animate = (time: number) => {
        rafRef.current = requestAnimationFrame(animate);
        const dt = Math.min((time - lastTime) / 1000, 0.05);
        lastTime = time;

        const drag = dragRef.current;

        if (drag.active) {
          // While dragging: current snaps to target (already done in onPointerMove)
          group.rotation.y = currentRotRef.current;
        } else {
          // Momentum: decay drag velocity and apply it
          drag.velocity *= 0.88;
          targetRotRef.current += drag.velocity;

          // Resume slow auto-rotate after idle for 2 s
          drag.idleTime += dt;
          if (
            drag.idleTime > 2.0 &&
            Math.abs(drag.velocity) < 0.001
          ) {
            targetRotRef.current += dt * 0.06;
          }

          currentRotRef.current +=
            (targetRotRef.current - currentRotRef.current) *
            0.06;
          group.rotation.y = currentRotRef.current;
        }

        // Camera mouse parallax (only when not dragging)
        if (!drag.active) {
          camTarget.set(
            mouseRef.current.x * 1.4,
            -mouseRef.current.y * 0.9,
            10
          );
          camera.position.lerp(camTarget, 0.04);
        }
        camera.lookAt(0, 0, 0);

        // Per-card: coverflow rotation + bob
        const t = time * 0.0005;
        const G = currentRotRef.current;
        const SIDE_TILT = 0.45; // ~25° — flatter angle for side cards so they are visible

        cardData.forEach(({ mesh, edges, baseY }, i) => {
          const localAngle = (i / COUNT) * Math.PI * 2;

          // World angle of this card: normalize to -π..π
          const raw = localAngle + G;
          const wa =
            ((raw % (Math.PI * 2)) + Math.PI * 2) %
            (Math.PI * 2);
          const waNorm = wa > Math.PI ? wa - Math.PI * 2 : wa;

          // frontness: 1 at front (waNorm=0), sharp falloff, 0 at sides/back
          const cosWa = Math.cos(waNorm);
          const frontness = Math.max(
            0,
            cosWa * Math.abs(cosWa)
          ); // cos² with sign preserved → sharper

          // Coverflow world rotation:
          //   front  → world rotY = 0  (card faces camera flat)
          //   sides  → world rotY = ±SIDE_TILT (tilted inward like a record store)
          // mesh is child of group, so: worldRotY = group.rotY + mesh.rotY
          //   → mesh.rotY = targetWorldRotY - G
          const targetWorldRotY =
            Math.sign(waNorm || 1) *
            SIDE_TILT *
            (1 - Math.max(0, frontness));
          mesh.rotation.y = targetWorldRotY - G;

          // Bob
          const bobY = baseY + Math.sin(t + i * 1.1) * 0.13;
          mesh.position.y = bobY;

          // Sync edges
          edges.position.copy(mesh.position);
          edges.rotation.copy(mesh.rotation);

          // Scale: front card slightly larger
          const targetScale =
            0.82 + Math.max(0, frontness) * 0.36;
          mesh.scale.lerp(
            new THREE.Vector3(targetScale, targetScale, 1),
            0.08
          );
          edges.scale.copy(mesh.scale);

          // Edge glow on front card
          (edges.material as THREE.LineBasicMaterial).opacity =
            0.25 + Math.max(0, frontness) * 0.75;
          (edges.material as THREE.LineBasicMaterial).color =
            new THREE.Color().lerpColors(
              new THREE.Color(0x2a2a50),
              new THREE.Color(0x7799ff),
              Math.max(0, frontness)
            );

          // Dim cards that are facing away (back of circle)
          const mat =
            mesh.material as THREE.MeshStandardMaterial;
          if (mat.transparent) {
            const vis = 0.25 + Math.max(0, cosWa) * 0.75;
            mat.opacity = Math.min(
              mat.opacity + (vis - mat.opacity) * 0.06,
              vis
            );
          }
        });

        renderer.render(scene, camera);
      };
      animate(0);

      cleanupFn = () => {
        cancelAnimationFrame(rafRef.current);
        mount.removeEventListener("mousedown", onPointerDown);
        mount.removeEventListener(
          "touchstart",
          onPointerDown as EventListener
        );
        window.removeEventListener(
          "mousemove",
          onPointerMove as EventListener
        );
        window.removeEventListener(
          "touchmove",
          onPointerMove as EventListener
        );
        window.removeEventListener("mouseup", onPointerUp);
        window.removeEventListener("touchend", onPointerUp);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        if (mount.contains(renderer.domElement))
          mount.removeChild(renderer.domElement);
      };
    } catch (err) {
      console.error("[ArtCarousel3D]", err);
    }

    return () => cleanupFn?.();
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
