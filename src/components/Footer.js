import { StyledFooter } from "../styles/Footer.styled"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    const year = new Date().getFullYear();

    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <StyledFooter>
            <div className="d-flex justify-content-center align-item-center gap-3 py-2">
                <GitHubIcon sx={{ fontSize: "26px" }} className="contactIcon" onClick={() => handleClick('https://github.com/m88deng')} />
                <InstagramIcon sx={{ fontSize: "26px" }} className="contactIcon" onClick={() => handleClick('https://www.instagram.com/meli_deng/')} />
                <LinkedInIcon sx={{ fontSize: "26px" }} className="contactIcon" onClick={() => handleClick('https://www.linkedin.com/in/deng-melissa/')} />
            </div>
            <div className="d-flex justify-content-center align-items-center p-0">
                <small className="text-center">© {year} Melissa Deng</small>
            </div>
        </StyledFooter>
    )

}