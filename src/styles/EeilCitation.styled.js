import styled from "styled-components";

export const StyledEeil1Grid5 = styled.div`
    display: grid; grid-template-columns: 1fr; gap: 2%; padding-bottom: 5px;
`;

export const StyledEeil1Grid20 = styled.div`
    display: grid; grid-template-columns: 1fr; padding-bottom: 20px
`;

export const StyledEeil2Grid5 = styled.div`
    display: grid; grid-template-columns: 1fr 1fr; gap: 2%; padding-bottom: 5px;
`;

export const StyledEeil2Grid20 = styled.div`
    display: grid; grid-template-columns: 1fr 1fr; gap: 2%; padding-bottom: 20px;   
`;

export const StyledEeil3Grid5 = styled.div`
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2%; padding-bottom: 5px;
`;

export const StyledEeilGenerate = styled.div`
    text-align: center; padding-top: 20px; padding-bottom: 20px;
`;

export const StyledEeilSrc = styled.div`
width: 100vw;
height: 100%;
padding: 0 px;
margin: 0;
padding: 6% 15% 8%;

    
    .my-name {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    }
    
    
    input{
    padding: 10px;
    font-size: 14px;
    font-family: Work Sans, sans-serif;
    border-radius: 5px;
    border-style: none;
    }

    .generate-button{
    margin-top: 2%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    background-color: var(--color-background);  
    color:var(--color-foreground);
    cursor: pointer;
    transition: 0.4s;
    }

    .generate-button:hover{
    color: #ffffff;
    background-color: var(--color-highlight);      
    }

    .content-art {
    padding-top: 90px;
    }

    .intro {
    padding-top: 190px;
    padding-left: 15%;
    padding-right: 15%;
    height: 450px;
    margin-bottom: 100px;
    }
    .illustrations {
    padding-top: 120px;
    padding-bottom: 150px;
    padding-left: 25%;
    padding-right: 25%;
    }
    .footnote {
    padding-top: 300px;
    padding-bottom: 40px;
    }

    .src-bg{
    padding: 6% 6% 8%;
    transition: 0.4s;
    border: none;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px)
    }

    .src-bg:hover{
    /* background-color: rgba(250, 246, 245, 0.11); */
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.20);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px)
    }

    .copy-button{
    background: #FAF6F5;
    color: #08040f;
    font-size: 14px;
    transition: 0.3s;
    padding: 10px;

    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s;
    }

    .copy-button:hover{
    background-color: #d6c0ff;
    }

    .tooltip {
        position: relative;
        display: inline-block;
    }

    .tooltip .tooltiptext {
        content: "";
        visibility: hidden;
        width: 80px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        padding: 7px;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -50%;
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }
    
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }

    .invisible{
    display: none;
    }

    .alert-box{
    background-color: rgb(235, 123, 123);
    color: #481c1c;
    font-family: sans-serif;
    font-size: 14px;
    padding: 20px;
    margin-top: 25px;
    border-radius: 5px;
    }


    @media only screen and (max-width: 905px) {
    p {
            text-align: justify;
    }
    
    .me,
    .project1,
    .img-grid,
    .manga-description,
    .shop-box,
    .shop {
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .intro-left,
    .intro-right,
    .project-img,
    .manga-text,
    .manga-cover,
    .shop-text,
    .shop {
        width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    }
    .manga-cover {
        width: 115%;
        justify-content: center;
    }
    div#intro-L,
    div#manga-txt,
    div#shop-textID {
        order: 2;
    }
    div#intro-R,
    div#manga-cver,
    div#shopID {
        order: 1;
        padding-top: 30px;
        padding-bottom: 20px;
    }
    .project-text {
        margin-top: 20px;
        padding-left: 0;
        width: 100%;
    }
    .title-web {
        display: none;
    }
    .title-mobile {
        display: block;
    }
    .about-me {
        margin-top: 90px;
    }
    .footnote {
        padding-top: 150px;
    }

    .job-icon {
        width: 25%;
    }
    }

    @media screen and (max-width: 624px) {
    body {
        min-width: 624px;
    }
    }


`;
