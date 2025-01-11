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
        width: 220px;
        height: 220px;
        margin: 50px 0px;

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

    #hobbyArt{
        top: 5px;
        left: 230px;
    }
    #hobbyMusic{
        top: 80px;
        left: 280px;
    }
    #hobbyGame{
        top: 170px;
        left: 280px;
    }
    #hobbyPhoto{
        top: 255px;
        left: 230px;
    }
    #hobbyArtText{
        top: 25px;
        left: 310px;
    }
    #hobbyMusicText{
        top: 100px;
        left: 360px;
    }
    #hobbyGameText{
        top:190px;
        left: 360px;
    }
    #hobbyPhotoText{
        top:275px;
        left: 310px;
    }
    .hobbyText{
        min-width: 105px;
        position: absolute;
        text-transform: uppercase;
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

