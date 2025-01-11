import { styled } from "styled-components";

export const StyledExperienceSection = styled.div`
    width: 100vw;
    height: 100%;
    /* background-color: #e9edf2; */
    /* background-image: -webkit-linear-gradient(top, #e9edf2 0%, #dbe4f0 100%); */
    padding: 6% 15% 8%;
`;

export const StyledExperienceTimeline = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 2rem;

    .accordion-button{
        width: 100%;
        text-align: left;
        border: none;
        background-color: transparent;
    }

    .experienceCard{
        background-color: transparent;
        /* background-color: rgba(243, 243, 243, .75); */
        border: none;
    }

    .outer{
        border-left: 2px solid var(--color-foreground);
    }

    .experienceTitle::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 999px;
        left: -6.2px;
        top: 30px;
        border: 3px solid var(--color-foreground);
    }
`;