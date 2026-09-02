import artImg_1 from "../images/20200614_144809.JPG";
import artImg_2 from "../images/20200719_115306_2.jpg";
import artImg_3 from "../images/IMG_20200703_143712.jpg";
import artImg_4 from "../images/IMG_20200724_112956.jpg";
import artImg_5 from "../images/pixlr_20200825105326954.JPG";
import artImg_6 from "../images/IMG_20201129_185409-01 2.jpg";
import artImg_7 from "../images/IMG_20201129_185409-01.jpg";
import artImg_8 from "../images/IMG_20201225_102318.jpg";
import artImg_9 from "../images/IMG_20220129_130136.jpg";
import artImg_10 from "../images/IMG_20220220_142015.jpg";
import artImg_11 from "../images/20200604_160933.jpg";
import artImg_12 from "../images/20200606_161441.jpg";
import artImg_13 from "../images/20200613_150002.jpg";
import artImg_14 from "../images/20200701_135637_2.jpg";
import artImg_15 from "../images/20200702_132024_2.jpg";
import artImg_16 from "../images/IMG_20200729_111511_20200729113228770.jpg";
import artImg_17 from "../images/IMG_20200801_123639.jpg";
import artImg_18 from "../images/IMG_20200914_160301.jpg";
import artImg_19 from "../images/IMG_20200914_160530.jpg";
import artImg_20 from "../images/pixlr_20200808122553352.JPG";
import artImg_21 from "../images/IMG_20201003_114846.jpg";
import artImg_22 from "../images/IMG_20201005_164528.jpg";
import artImg_23 from "../images/IMG_20201006_154045_20201006154541930.jpg";
import artImg_24 from "../images/IMG_20201007_160938.jpg";
import artImg_25 from "../images/IMG_20201008_171212.jpg";
import artImg_26 from "../images/IMG_20201009_170654.jpg";
import artImg_27 from "../images/IMG_20201010_140410.jpg";
import artImg_28 from "../images/IMG_20201011_153608_20201011153910356.jpg";
import artImg_29 from "../images/IMG_20201003_114712.jpg";
import artImg_30 from "../images/IMG_20210102_145648.jpg";
import artImg_31 from "../images/IMG_20210104_104232_20210104105218861.jpg";
import artImg_32 from "../images/IMG_20210106_132645.jpg";
import artImg_33 from "../images/IMG_20210109_102633.jpg";
import artImg_34 from "../images/IMG_20210115_090740.jpg";
import artImg_35 from "../images/IMG_20210210_110526.jpg";
import artImg_36 from "../images/IMG_20210212_124746.jpg";
import artImg_37 from "../images/IMG_20210305_162705.jpg";
import artImg_38 from "../images/IMG_20210406_155146.jpg";
import artImg_39 from "../images/IMG_20210602_141744.jpg";
import artImg_40 from "../images/IMG_20210602_171323_20210602171441506.jpg";
import artImg_41 from "../images/IMG_20210629_133702.jpg";
import artImg_42 from "../images/IMG_20210716_114633.jpg";
import artImg_43 from "../images/IMG_20210829_132928.jpg";
import artImg_44 from "../images/IMG_20211010_125127.jpg";
import artImg_45 from "../images/IMG_20211231_102140_20211231105023048.jpg";
import artImg_46 from "../images/IMG_20220129_114144.jpg";
import artImg_47 from "../images/IMG_20220730_085706.jpg";
import artImg_48 from "../images/IMG_0722.jpg";
import artImg_49 from "../images/IMG_0183.JPG";
import artImg_50 from "../images/IMG_0356.JPG";
import artImg_51 from "../images/IMG_0364.JPG";
import artImg_52 from "../images/IMG_2344.PNG";
import artImg_53 from "../images/IMG_2415.JPG";
import artImg_54 from "../images/IMG_4336.JPG";
import artImg_55 from "../images/IMG_20260830_223208.jpg";
import artImg_56 from "../images/IMG_20260830_223252.jpg";
import artImg_57 from "../images/IMG_20260830_223358.jpg";
import artImg_58 from "../images/IMG_20260830_223436.jpg";
import artImg_59 from "../images/IMG_20260830_223524.jpg";
import artImg_60 from "../images/IMG_20260830_223608.jpg";
import artImg_61 from "../images/IMG_20260830_223817.jpg";
import artImg_62 from "../images/IMG_20260830_223903.jpg";
import artImg_63 from "../images/IMG_20260830_224010.jpg";
import artImg_64 from "../images/IMG_20260830_224122.jpg";
import artImg_65 from "../images/IMG_20260830_224357.jpg";
import artImg_66 from "../images/IMG_20260830_224336.jpg";
import artImg_67 from "../images/IMG_20260830_224434.jpg";
import artImg_68 from "../images/IMG_20260830_224539.jpg";
import artImg_69 from "../images/IMG_20260830_224619.jpg";
import artImg_70 from "../images/IMG_20260830_224817.jpg";
import artImg_71 from "../images/IMG_20260830_224741.jpg";
import artImg_72 from "../images/IMG_20260830_224851.jpg";
import artImg_73 from "../images/20171210_132043.jpg";
import artImg_74 from "../images/20171210_132237.jpg";
import artImg_75 from "../images/20180415_173444.jpg";
import artImg_76 from "../images/20200424_222035.JPG";
import artImg_77 from "../images/IMG_2023_08_29.jpg";
import artImg_78 from "../images/IMG_20260824_201311.jpg";
import artImg_79 from "../images/IMG_4335.JPG";
import artImg_80 from "../images/IMG_20260824_201609.jpg";
import artImg_81 from "../images/IMG_20260824_201728.jpg";
import artImg_82 from "../images/IMG_20260830_202107.jpg";
import artImg_83 from "../images/IMG_4334.JPG";
import artImg_84 from "../images/IMG_4337.JPG";
import artImg_85 from "../images/20171210_132312.jpg";
import artImg_86 from "../images/IMG_20260830_223703.jpg";

export interface Artwork {
  title: string;
  category: string;
  src: string;
  date?: string;
  dimensions?: string;
  medium?: string;
}

export const ALL_ARTWORKS: Artwork[] = [
  // Paintings
  {
    title: "The White Lighthouse",
    category: "Paintings",
    date: "2026",
    src: artImg_83,
    dimensions: "2048 x 2732 px",
    medium: "Digital painting",
  },
  {
    title: "Enchanted Waters",
    category: "Paintings",
    date: "2026",
    src: artImg_82,
    dimensions: "762 x 1220 mm",
    medium: "Acrylic on canvas",
  },
  {
    title: "Lemonade",
    category: "Paintings",
    date: "2024",
    src: artImg_79,
    dimensions: "2048 x 2732 px",
    medium: "Digital painting",
  },
  {
    title: "Cornucopia",
    category: "Paintings",
    date: "2024",
    src: artImg_78,
    dimensions: "813 x 610 mm",
    medium: "Acrylic on canvas",
  },
  {
    title: "Rhythm of the Wind",
    category: "Paintings",
    date: "2026",
    src: artImg_81,
    dimensions: "762 × 1220 mm",
    medium: "Acrylic on canvas",
  },
  {
    title: "Koi Pond",
    category: "Paintings",
    date: "2026",
    src: artImg_80,
    dimensions: "305 × 406 mm",
    medium: "Acrylic on canvas",
  },
  {
    title: "Night Lamps",
    category: "Paintings",
    date: "2017",
    src: artImg_74,
    dimensions: "813 x 610 mm",
    medium: "Acrylic on canvas",
  },
  {
    title: "Mountain Shore Beach",
    category: "Paintings",
    date: "2017",
    src: artImg_85,
    dimensions: "508 x 610 mm",
    medium: "Acrylic on canvas",
  },
  {
    title: "Leaves of Change",
    category: "Paintings",
    date: "2016",
    src: artImg_73,
    dimensions: "610 x 508 mm",
    medium: "Acrylic on canvas",
  },
  {
    title: "Autumn Bridge",
    category: "Paintings",
    date: "2020",
    src: artImg_76,
    dimensions: "813 x 610 mm",
    medium: "Acrylic on canvas",
  },
  {
    title: "Peaceful Countryside Sunrise",
    category: "Paintings",
    date: "2023",
    src: artImg_77,
    dimensions: "305 x 229 mm",
    medium: "Acrylic on canvas",
  },
  {
    title: "Moraine Lake",
    category: "Paintings",
    date: "2018",
    src: artImg_75,
    dimensions: "813 x 610 mm",
    medium: "Acrylic on canvas",
  },

  // Illustrations
  {
    title: "Me",
    category: "Illustrations",
    date: "2026",
    src: artImg_53,
    dimensions: "3993 x 2500 px",
    medium: "Digital painting",
  },
  {
    title: "Roy Wang [TFBOYS]",
    category: "Illustrations",
    date: "2021",
    src: artImg_44,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Addie",
    category: "Illustrations",
    date: "2022",
    src: artImg_49,
    dimensions: "2048 x 2048 px",
    medium: "Digital painting",
  },
  {
    title: "Yuu [OC] - Trauma",
    category: "Illustrations",
    date: "2021",
    src: artImg_42,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Full Moon Lunar Eclipse",
    category: "Illustrations",
    date: "2023",
    src: artImg_48,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Catalina",
    category: "Illustrations",
    date: "2023",
    src: artImg_51,
    dimensions: "2048 x 2048 px",
    medium: "Digital painting",
  },
  {
    title: "Yuu [OC] - Violets",
    category: "Illustrations",
    date: "2022",
    src: artImg_45,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Countryside Memories",
    category: "Illustrations",
    date: "2022",
    src: artImg_47,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Happy Lunar New Year",
    category: "Illustrations",
    date: "2022",
    src: artImg_46,
    dimensions: "210 x 297 mm",
    medium: "Marker on paper",
  },
  {
    title: "Dreamy Clouds [DTIYS @mattloafs]",
    category: "Illustrations",
    date: "2020",
    src: artImg_20,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Ellie",
    category: "Illustrations",
    date: "2022",
    src: artImg_50,
    dimensions: "2048 x 2048 px",
    medium: "Digital painting",
  },
  {
    title: "Golden Hour",
    category: "Illustrations",
    date: "2021",
    src: artImg_43,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Ge-me-ni",
    category: "Illustrations",
    date: "2024",
    src: artImg_54,
    dimensions: "4096 x 4096 px",
    medium: "Digital painting",
  },
  {
    title: "Militsa",
    category: "Illustrations",
    date: "2026",
    src: artImg_52,
    dimensions: "2500 x 3435 px",
    medium: "Digital painting",
  },
  {
    title: "Birthday Queen",
    category: "Illustrations",
    date: "2021",
    src: artImg_40,
    dimensions: "148 x 210 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Festive Panda",
    category: "Illustrations",
    date: "2021",
    src: artImg_39,
    dimensions: "105 x 148 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Albedo [Genshin Impact]",
    category: "Illustrations",
    date: "2021",
    src: artImg_34,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  
  {
    title: "Venti [Genshin Impact]",
    category: "Illustrations",
    date: "2021",
    src: artImg_38,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Xiao [Genshin Impact]",
    category: "Illustrations",
    date: "2021",
    src: artImg_37,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Klee [Genshin Impact]",
    category: "Illustrations",
    date: "2021",
    src: artImg_36,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Zhongli [Genshin Impact]",
    category: "Illustrations",
    date: "2021",
    src: artImg_35,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Giro [@kuroh.shiro OC]",
    category: "Illustrations",
    date: "2021",
    src: artImg_41,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Qiqi [Genshin Impact]",
    category: "Illustrations",
    date: "2021",
    src: artImg_33,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Kuroku [Kuroko no Basuke]",
    category: "Illustrations",
    date: "2021",
    src: artImg_30,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Paper Crane",
    category: "Illustrations",
    date: "2021",
    src: artImg_32,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Pumpkin [Inktober Day 6]",
    category: "Illustrations",
    date: "2020",
    src: artImg_25,
    dimensions: "148 x 210 mm",
    medium: "Ink on paper",
  },
  {
    title: "Nova [DTIYS @riizu__]",
    category: "Illustrations",
    date: "2021",
    src: artImg_31,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Vampire [Inktober Day 9]",
    category: "Illustrations",
    date: "2020",
    src: artImg_28,
    dimensions: "148 x 210 mm",
    medium: "Ink on paper",
  },
  {
    title: "Witch [Inktober Day 8]",
    category: "Illustrations",
    date: "2020",
    src: artImg_27,
    dimensions: "148 x 210 mm",
    medium: "Ink on paper",
  },
  {
    title: "Candy Basket [Inktober Day 7]",
    category: "Illustrations",
    date: "2020",
    src: artImg_26,
    dimensions: "148 x 210 mm",
    medium: "Ink on paper",
  },
  {
    title: "Cat [Inktober Day 2]",
    category: "Illustrations",
    date: "2020",
    src: artImg_21,
    dimensions: "148 x 210 mm",
    medium: "Ink on paper",
  },
  {
    title: "Spine [DTIYS @kuroh.shiro]",
    category: "Illustrations",
    date: "2020",
    src: artImg_14,
    dimensions: "148 x 210 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Costumes [Inktober Day 5]",
    category: "Illustrations",
    date: "2020",
    src: artImg_24,
    dimensions: "148 x 210 mm",
    medium: "Ink on paper",
  },
  {
    title: "Graves [Inktober Day 4]",
    category: "Illustrations",
    date: "2020",
    src: artImg_23,
    dimensions: "148 x 210 mm",
    medium: "Ink on paper",
  },
  {
    title: "Ghost [Inktober Day 3]",
    category: "Illustrations",
    date: "2020",
    src: artImg_22,
    dimensions: "148 x 210 mm",
    medium: "Ink on paper",
  },
  {
    title: "Lavender Warden",
    category: "Illustrations",
    date: "2020",
    src: artImg_19,
    dimensions: "148 x 210 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Rose Warden",
    category: "Illustrations",
    date: "2020",
    src: artImg_18,
    dimensions: "148 x 210 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Sei [DTIYS @akazumii_]",
    category: "Illustrations",
    date: "2020",
    src: artImg_17,
    dimensions: "148 x 210 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Monster [Inktober Day 10]",
    category: "Illustrations",
    date: "2020",
    src: artImg_29,
    dimensions: "148 x 210 mm",
    medium: "Ink on paper",
  },
  {
    title: "Manz [DTIYS @kota_tsumi]",
    category: "Illustrations",
    date: "2020",
    src: artImg_11,
    dimensions: "105 x 148 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Summer Vibes [DTIYS @_01ki]",
    category: "Illustrations",
    date: "2020",
    src: artImg_16,
    dimensions: "140 x 140 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Lilia [DTIYS @cerithe]",
    category: "Illustrations",
    date: "2020",
    src: artImg_15,
    dimensions: "148 x 210 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Yining [OC] - Sandwich Frozen Yogurt",
    category: "Illustrations",
    date: "2020",
    src: artImg_12,
    dimensions: "105 x 148 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Jinwoo [Solo Leveling]",
    category: "Illustrations",
    date: "2020",
    src: artImg_13,
    dimensions: "105 x 148 mm",
    medium: "Colored pencil on paper",
  },

  // Manga Project
  {
    title: "May [OC] - Edelweiss",
    category: "Manga Project",
    date: "2020",
    src: artImg_4,
    dimensions: "297 x 210 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "May & Leaf [OC] - Christmas",
    category: "Manga Project",
    date: "2021",
    src: artImg_8,
    dimensions: "297 x 210 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "May [OC] - Child",
    category: "Manga Project",
    date: "2020",
    src: artImg_2,
    dimensions: "210 x 297 mm",
    medium: "Watercolor on paper",
  },
  {
    title: "Jaelyn [OC]",
    category: "Manga Project",
    date: "2021",
    src: artImg_7,
    dimensions: "148 x 210 mm",
    medium: "Marker on paper",
  },
  {
    title: "May [OC] - Boba",
    category: "Manga Project",
    date: "2022",
    src: artImg_9,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Liam [OC] - Tea Time",
    category: "Manga Project",
    date: "2022",
    src: artImg_10,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "Levi [OC]",
    category: "Manga Project",
    date: "2021",
    src: artImg_6,
    dimensions: "148 x 210 mm",
    medium: "Marker on paper",
  },
  {
    title: "May [OC] - Rabbit",
    category: "Manga Project",
    date: "2020",
    src: artImg_5,
    dimensions: "105 x 148 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "May [OC] - Outfits x 3",
    category: "Manga Project",
    date: "2020",
    src: artImg_1,
    dimensions: "210 x 297 mm",
    medium: "Colored pencil on paper",
  },
  {
    title: "May [OC] - Cya",
    category: "Manga Project",
    date: "2020",
    src: artImg_3,
    dimensions: "105 x 148 mm",
    medium: "Colored pencil on paper",
  },

  // Graphite Studies
  {
    title: "St. Peter's Basilica",
    category: "Graphite Studies",
    date: "2022",
    src: artImg_72,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Old Town Square",
    category: "Graphite Studies",
    date: "2022",
    src: artImg_71,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Schloss Linderhof (Germany)",
    category: "Graphite Studies",
    date: "2021",
    src: artImg_70,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Château Frontenac (Canada)",
    category: "Graphite Studies",
    date: "2021",
    src: artImg_69,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Château de Chillon (Switzerland)",
    category: "Graphite Studies",
    date: "2020",
    src: artImg_68,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "God of War Planar Mask",
    category: "Graphite Studies",
    date: "2020",
    src: artImg_66,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Breakfast Table",
    category: "Graphite Studies",
    date: "2020",
    src: artImg_67,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "The Warrior (Bust of Mars)",
    category: "Graphite Studies",
    date: "2019",
    src: artImg_65,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Eye",
    category: "Graphite Studies",
    date: "2019",
    src: artImg_86,
    dimensions: "460 x 305 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Marcus Vipsanius Agrippa",
    category: "Graphite Studies",
    date: "2019",
    src: artImg_64,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Nose",
    category: "Graphite Studies",
    date: "2019",
    src: artImg_63,
    dimensions: "305 x 460 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Mouth",
    category: "Graphite Studies",
    date: "2019",
    src: artImg_62,
    dimensions: "305 x 460 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Ear",
    category: "Graphite Studies",
    date: "2019",
    src: artImg_61,
    dimensions: "306 x 460 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Glass",
    category: "Graphite Studies",
    date: "2018",
    src: artImg_60,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Pottery & Apples",
    category: "Graphite Studies",
    date: "2018",
    src: artImg_59,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Polyhedron & Vase",
    category: "Graphite Studies",
    date: "2018",
    src: artImg_58,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Polyhedron & Apples",
    category: "Graphite Studies",
    date: "2018",
    src: artImg_57,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Apples & Pears",
    category: "Graphite Studies",
    date: "2018",
    src: artImg_56,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },
  {
    title: "Drapery",
    category: "Graphite Studies",
    date: "2018",
    src: artImg_55,
    dimensions: "460 x 610 mm",
    medium: "Graphite on paper",
  },

  // Merch Designs
  {
    title: "NX GSS",
    category: "Merch Designs",
    date: "2026",
    src: artImg_84,
    dimensions: "4096 x 2734 px",
    medium: "Generative Code",
  },
];

export const ART_SECTIONS = [
  {
    t: "Paintings",
    m: "Risograph, 2-color",
    dim: "Various sizes",
    color: "#ff2d7a",
    tall: false,
    img: artImg_83,
    artworks: ALL_ARTWORKS.filter((a) => a.category === "Paintings"),
  },
  {
    t: "Illustrations",
    m: "Ink, Marker, Pencil & Watercolor",
    dim: "210 x 297 mm",
    color: "#00e5c8",
    tall: false,
    img: artImg_53,
    artworks: ALL_ARTWORKS.filter((a) => a.category === "Illustrations"),
  },
  {
    t: "Manga Project",
    m: "Original story",
    dim: "148 × 200 mm",
    color: "#ff2d7a",
    tall: true,
    img: artImg_2,
    artworks: ALL_ARTWORKS.filter((a) => a.category === "Manga Project"),
  },
  {
    t: "Graphite Studies",
    m: "Realism & Still Life",
    dim: "460 x 610 mm",
    color: "#ffd100",
    tall: false,
    img: artImg_72,
    artworks: ALL_ARTWORKS.filter((a) => a.category === "Graphite Studies"),
  },
  {
    t: "Merch Designs",
    m: "Generative / Code",
    dim: "Variable sizes",
    color: "#00e5c8",
    tall: false,
    img: artImg_84,
    artworks: ALL_ARTWORKS.filter((a) => a.category === "Merch Designs"),
  },
];
