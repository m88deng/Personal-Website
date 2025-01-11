import { useTranslation } from "react-i18next";
import { StyledExperienceSection } from "../../styles/Experience.styled";
import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperienceSection({id}) {
    const [t] = useTranslation("global");
    return (
        <StyledExperienceSection id={id}>
            <h1>{t("navbar.experience")}</h1>
            <ExperienceTimeline />
        </StyledExperienceSection>
    )
}