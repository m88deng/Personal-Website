import EeilHeader from "../components/projects/EeilHeader";
import EeilPeriodic from "../components/projects/EeilPeriodic";
import EeilWebsite from "../components/projects/EeilWebsite";
import EeilMonography from "../components/projects/EeilMonography";

export default function EeilCitationPage() {
    return (
        <>
            <EeilHeader />
            <div className="h1 d-flex flex-column justify-content-center align-items-center pt-5">EEIL-Style Citation</div>
            <EeilWebsite />
            <EeilMonography />
            <EeilPeriodic />
        </>
    )
}