import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import { StyledIntro } from "../../styles/Intro.styled.js";

export default function Intro() {
    const [t] = useTranslation("global")
    return (
        <StyledIntro className="hero d-flex flex-column justify-content-center align-items-center">
            <h4>{t("hero.welcome")}</h4>
            <div className="title pb-4">Melissa Deng</div>
            <TypeAnimation
                sequence={[
                    "Software Engineering Student", 3500,
                    "Front End Developer", 3500,
                    "UI/UX Designer", 3500,
                    "Traditional Artist", 3500,
                    "Étudiante en génie logicielle", 3500,
                    "Développeuse Front-End", 3500,
                    "Designer UI/UX", 3500,
                    "Artiste traditionnelle", 3500,
                    "软件工程学生", 3500, "前端工程师", 3500, "UI/UX 设计师", 3500, "传统艺术家", 3500
                ]}
                style={{
                    fontSize: '16px',
                    fontFamily: '"Noto Sans", sans-serif',
                }}
                repeat={Infinity}
            />
            {/* <h4 className="pb-5">{t("hero.titles.softwareEngineer")} • {t("hero.titles.frontendDeveloper")} • {t("hero.titles.uiuxDesigner")} • {t("hero.titles.traditionalArtist")}</h4> */}
        </StyledIntro>
    );
};