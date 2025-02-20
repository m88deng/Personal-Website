import { StyledProjectSection, StyledProjectGrid, StyledProjectCard } from "../../styles/Projects.styled";
import { StyledTechSection, StyledTechnology } from "../../styles/About.styled";

import { useTranslation } from "react-i18next";

export default function ProjectSection({ id }) {
    const [t] = useTranslation("global");
    const projects = t('projects', { returnObjects: true });

    return (

        <StyledProjectSection id={id} >
            <h1>{t("navbar.projects")}</h1>
            <StyledProjectGrid>
                {projects.map((project, index) => {
                    const projectContent = (
                        <StyledProjectCard key={index}>
                            <div className="card projectCard" style={{ cursor: project.link ? "pointer" : "default" }}>
                                <h2 className="card-title px-4 pt-4 mb-1">{project.name}</h2>
                                <div className="card-body px-4 pb-4 row">
                                    <div className="col-12 d-flex flex-column py-0 justify-content-start">
                                        <p className="py-2">{project.description}</p>
                                        <StyledTechSection>
                                            {project.techStack && project.techStack.map((tech, id) => (
                                                <StyledTechnology key={id}>{tech.tech}</StyledTechnology>
                                            ))}
                                        </StyledTechSection>
                                    </div>
                                </div>
                            </div>
                        </StyledProjectCard>
                    )
                    return project.link ? (
                        <a href={project.link} style={{ textDecoration: 'none' }} key={index}>
                            {projectContent}
                        </a>
                    ) : (
                        projectContent
                    );
                })}
            </StyledProjectGrid>

        </StyledProjectSection >
    )
}