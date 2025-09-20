import { styled } from "styled-components";

export const StyledAboutSection = styled.div`
    width: 100vw;
    height: 100%;
    padding: 6% 15% 8%;
    
    .hobbyText{
        min-width: 105px;
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

export const StyledFlipCard = styled.div`
    background-color: transparent;
    width: 254px;
    height: 254px;
    perspective: 1000px;
    font-family: sans-serif;

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transition-timing-function: cubic-bezier(0.61, 0.98, 0.48, 1.01);
        transform-style: preserve-3d;
    }

    &:hover .flip-card-inner {
        transform: rotate(180deg) rotateX(180deg);
    }

    .flip-card-front,
    .flip-card-back {
        box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 1rem;
    }

    .flip-card-front {
        background: #fff;
        color: #000;
    }

    .flip-card-back {
        transform: rotateY(180deg);
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        -webkit-backdrop-filter: blur(18px);
        backdrop-filter: blur(18px);
    }
    
    .talent-grid {
        display: flex;
        flex-direction: column;
        gap: 8px; 
        padding: 12px 12px 24px;
        margin-top: 8px;
        width: 100%;
    }

    .talent-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px; 
        cursor: pointer;
        padding: 4px 8px 4px 6px;
        border-radius: 0.5rem;
    }

    .talent-row:hover {
        background-color: rgba(52, 81, 209, 0.15); /* faint blue */
        color: var(--color-header);
    }
    
    .talent-row > div {
        display: flex;
        align-items: center;
        gap: 6px;
    }
`;

export const StyledPfp = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "background"
})`
    background-image: url(${({ background }) => background});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    border-radius: inherit;
`

export const StyledTechSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 0px 20px;
    gap: 8px;
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

