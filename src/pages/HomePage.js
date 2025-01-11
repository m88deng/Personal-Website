import Header from "../components/Header"
import Intro from "../components/home/Intro"
import About from "../components/home/About"
import ProjectSection from "../components/home/Projects"
import ExperienceSection from "../components/home/Experience"

export default function HomePage() {
    return (
        <>
            <Header />
            <Intro />
            <About id="about" />
            <ExperienceSection id="experience" />
            <ProjectSection id="projects" />
        </>
    )
}