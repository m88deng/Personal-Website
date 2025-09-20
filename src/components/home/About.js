import { StyledAboutSection, StyledTechnology, StyledTechSection, StyledIntroDiv, StyledPfp, StyledFlipCard } from "../../styles/About.styled";
import Pfp from './../../assets/pfp.jpg'
import PaletteIcon from '@mui/icons-material/Palette';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useTranslation } from "react-i18next";

export default function About({ id }) {
    const [t] = useTranslation("global")

    return (
        <StyledAboutSection id={id}>
            <h1>{t("navbar.about")}</h1>
            <StyledIntroDiv className="d-flex justify-content-between pb-3 gap-3">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center px-0 order-2 order-lg-1">
                    <p>{t("about.description1")}</p>
                    <br />
                    <p className="pb-2">{t("about.description2")}</p>
                </div>
                <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center ml-3 pb-3 hobbydiv order-1 order-lg-2" style={{ position: "relative" }}>
                    <StyledFlipCard>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <StyledPfp background={Pfp}></StyledPfp>
                        </div>
                        <div className="flip-card-back">
                            <h3 className="title">{t("about.talent")}</h3>
                                <div className="talent-grid">
                                    <div className="talent-row">
                                        <a href="https://meiliiart.carrd.co/" target="_blank" rel="noreferrer">
                                        <div id="talent-arts">
                                            <PaletteIcon sx={{ fontSize: 20 }} style={{ color: "var(--color-icon)" }} />
                                            <span>{t("about.art")}</span>
                                        </div>
                                        <span>S</span>
                                        </a>
                                    </div>
                                    <div className="talent-row">
                                        <a href="https://tinyurl.com/okiiita-spotify" target="_blank" rel="noreferrer">
                                        <div id="talent-music">
                                            <MusicNoteIcon sx={{ fontSize: 20 }} style={{ color: "var(--color-icon)" }} />
                                            <span>{t("about.music")}</span>
                                        </div>
                                        <span>S</span>
                                        </a>
                                    </div>
                                    <div className="talent-row">
                                        <div id="talent-gaming">
                                            <SportsEsportsIcon sx={{ fontSize: 20 }} style={{ color: "var(--color-icon)" }} />
                                            <span>{t("about.gaming")}</span>
                                        </div>
                                        <span>B</span>
                                    </div>
                                    <div className="talent-row">
                                        <div id="talent-photography">
                                            <PhotoCameraIcon sx={{ fontSize: 20 }} style={{ color: "var(--color-icon)" }} />
                                            <span>{t("about.photography")}</span>
                                        </div>
                                        <span>A</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </StyledFlipCard>


                    
                </div>
            </StyledIntroDiv>
            <h3>{t("about.languages")}</h3>
            <StyledTechSection>
                <StyledTechnology>Python</StyledTechnology>
                <StyledTechnology>C</StyledTechnology>
                <StyledTechnology>C++</StyledTechnology>
                <StyledTechnology>Java</StyledTechnology>
                <StyledTechnology>Javascript</StyledTechnology>
                <StyledTechnology>Typescript</StyledTechnology>
                <StyledTechnology>HTML</StyledTechnology>
                <StyledTechnology>CSS</StyledTechnology>
            </StyledTechSection>
            <h3>{t("about.technologies")}</h3>
            <StyledTechSection >
                <StyledTechnology>React</StyledTechnology>
                <StyledTechnology>GraphQL</StyledTechnology>
                <StyledTechnology>Next.js</StyledTechnology>
                <StyledTechnology>Bootstrap</StyledTechnology>
                <StyledTechnology>Node.js</StyledTechnology>
                <StyledTechnology>Vite</StyledTechnology>
                <StyledTechnology>OpenCV</StyledTechnology>
            </StyledTechSection>
            <h3>{t("about.design")}</h3>
            <StyledTechSection>
                <StyledTechnology>Figma</StyledTechnology>
                <StyledTechnology>Photoshop</StyledTechnology>
                <StyledTechnology>Clip Studio Paint</StyledTechnology>
                <StyledTechnology>Procreate</StyledTechnology>
                <StyledTechnology>Final Cut Pro</StyledTechnology>
            </StyledTechSection>
        </StyledAboutSection>
    )
}