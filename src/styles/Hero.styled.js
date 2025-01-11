import { styled } from "styled-components";

export const StyledHero = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "background"
})`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  margin: 0;
  padding: 0;

  background-image: url(${({ background }) => background});
  background-blend-mode: color;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: "";
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  z-index: 2;
  }
  
  .bgLightCloud{
    width: 80%;
    opacity: 0.8;
    position: absolute;
    z-index: 1;
    animation: clouds 8s infinite;
    
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  @keyframes clouds {
    0%{ scale: 1; transform: translateY(0px)} 
    50%{scale: 1.05; transform: translateY(40px)}
    100%{scale: 1; transform: translateY(0px)}
  }
`;
