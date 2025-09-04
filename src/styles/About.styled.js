import { styled } from "styled-components";

export const StyledPfp = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "background"
})`
    background-image: url(${({ background }) => background});
`

export const StyledAboutSection = styled.div`
    width: 100vw;
    height: 100%;
    padding: 6% 15% 8%;

    #profilepic{
        aspect-ratio: 1 / 1;
        width: 240px;
        height: 240px;

        background-color: lightgray;
        border-radius: 100%;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    @media only screen and (max-width: 619px) {
        .hobbydiv{
            height: 320px;
        }
    }
    
    @media only screen and (max-width: 575px){
        .hobbydiv{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #hobbyArt, #hobbyMusic, #hobbyGame,
        #hobbyPhoto, #hobbyArtText, #hobbyMusicText, 
        #hobbyGameText, #hobbyPhotoText{
            display: none;
        }
    }

    .hobbyText{
        min-width: 105px;
        position: absolute;
        text-transform: uppercase;
        margin-left: 70px;
    }
`;

export const StyledIntroDiv = styled.div`
    @media only screen and (max-width: 991px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 2rem;
    }
`;

export const StyledTechSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 0px 20px;
    gap: 8px;
`;

export const OrbitAnchor = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin: 40px 0;
  overflow: visible;
`;

export const OrbitLayer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  z-index: 2;
`;

export const StyledHobbyUnit = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "angle" && prop !== "r"
})`
  position: relative;
  transform: ${({ angle, r = 150 }) =>
        `rotate(${angle}deg) translate(${r}px) rotate(-${angle}deg)`};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledHobby = styled.div`
    width: 60px;
    height: 60px;
    background-color: var(--color-highlight);
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
`;

export const StyledTechnology = styled.div`
    font-family: "Noto Sans", "Helvetica", sans-serif;
    font-size: 14px;
    letter-spacing: 15%;
  
    padding: 3px 16px;
    background-color: var(--color-highlight);
    color: white;
    border-radius: 50px;
`;

