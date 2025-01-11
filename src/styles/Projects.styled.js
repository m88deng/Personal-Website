import { styled } from "styled-components";

export const StyledProjectSection = styled.div`
    width: 100vw;
    height: 100%;
    padding: 6% 15% 8%;
`;

export const StyledProjectGrid = styled.div`
    padding-top: 2rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media only screen and (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledProjectCard = styled.div`
    width: 100%;
    min-height: 100%;
    /* position: relative;

    .icon{
        width: 20px;
        position: absolute;
        right: 20px;
        top: 1.5rem;
        height: 20px;
        color: var(--color-foreground);
        z-index: 1;
    }
    .icon:hover{
        cursor: pointer;
    } */

    .projectCard{
        height: 100%;
        border: none;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        -webkit-backdrop-filter: blur(18px);
        backdrop-filter: blur(18px);
    }
    .projectCard:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.35);
        box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);    
        -webkit-backdrop-filter: blur(30px);
        backdrop-filter: blur(30px);
    }
`;