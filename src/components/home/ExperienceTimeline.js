import { StyledExperienceTimeline } from "../../styles/Experience.styled";
import { StyledTechSection, StyledTechnology } from "../../styles/About.styled";
import { useTranslation } from "react-i18next";

export default function ExperienceTimeline() {

    const [t] = useTranslation("global");

    const experiences = t('experience', { returnObjects: true });

    return (
        <StyledExperienceTimeline>
            <div className="outer">
                {experiences.map((experience, index) => (
                    <div key={index} className="card py-4 experienceCard">
                        <h2 className="card-title px-4 py-0 mb-1 experienceTitle">{experience.position} • <span>{experience.company}</span></h2>
                        <small className="card-body px-4 py-0">{experience.startDay} - {experience.endDay} • {experience.location} • {experience.workType}</small>
                        <StyledTechSection className="card-body px-4 tech-gap">
                            {experience.techStack && experience.techStack.map((tech, id) => (
                                <StyledTechnology key={id}>{tech.tech}</StyledTechnology>
                            ))}
                        </StyledTechSection>
                        <p className="card-body px-4 py-0 mb-3">{experience.description}</p>
                        <ul>
                            {experience.bulletPoints && experience.bulletPoints.map((bulletPoint, idx) => (
                                <li key={idx}>{bulletPoint.text}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </StyledExperienceTimeline >
    );
}