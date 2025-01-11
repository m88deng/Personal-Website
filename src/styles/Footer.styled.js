import { styled } from "styled-components";

export const StyledFooter = styled.div`
    width: 100vw;
    height: calc(100vh * 0.2);
    /* background-color: #d2def0; */
    padding: 6% 15% 8%;

    .contactIcon:hover{
        cursor: pointer;
        color: var(--color-header);
    }
`;