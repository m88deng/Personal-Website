import { StyledAboutSection, OrbitAnchor, OrbitLayer, StyledHobby, StyledHobbyUnit, StyledTechnology, StyledTechSection, StyledIntroDiv, StyledPfp } from "../../styles/About.styled";
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
                <div className="col-12 col-lg-5 d-flex flex-column justify-content-center px-0 order-2 order-lg-1">
                    <p>{t("about.description1")}</p>
                    <br />
                    <p className="pb-2">{t("about.description2")}</p>
                </div>
                <div className="col-6 d-flex align-items-center ml-3 pb-3 hobbydiv order-1 order-lg-2">
                    <OrbitAnchor>
                        <StyledPfp background={Pfp} id="profilepic" />
                        <OrbitLayer>
                            <StyledHobbyUnit angle={60} r={155}>
                                <StyledHobby><PaletteIcon sx={{ fontSize: 35 }} style={{ color: "white" }} /></StyledHobby>
                                <small className="hobbyText">{t("about.art")}</small>
                            </StyledHobbyUnit>

                            <StyledHobbyUnit angle={20} r={165}>
                                <StyledHobby><MusicNoteIcon sx={{ fontSize: 35 }} style={{ color: "white" }} /></StyledHobby>
                                <small className="hobbyText">{t("about.music")}</small>
                            </StyledHobbyUnit>

                            <StyledHobbyUnit angle={340} r={165}>
                                <StyledHobby><SportsEsportsIcon sx={{ fontSize: 35 }} style={{ color: "white" }} /></StyledHobby>
                                <small className="hobbyText">{t("about.gaming")}</small>
                            </StyledHobbyUnit>

                            <StyledHobbyUnit angle={300} r={155}>
                                <StyledHobby><PhotoCameraIcon sx={{ fontSize: 35 }} style={{ color: "white" }} /></StyledHobby>
                                <small className="hobbyText">{t("about.photography")}</small>
                            </StyledHobbyUnit>
                        </OrbitLayer>
                    </OrbitAnchor>
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