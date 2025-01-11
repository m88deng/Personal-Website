import EeilHeader from "../../components/projects/eeil/EeilHeader";
import EeilMonography from "../../components/projects/eeil/EeilMonography";
import EeilPeriodic from "../../components/projects/eeil/EeilPeriodic";
import EeilWebsite from "../../components/projects/eeil/EeilWebsite";
import Headroom from "react-headroom"

export default function EeilCitationPage() {
    return (
        <>
            <Headroom>
                <EeilHeader />
            </Headroom>
            <div className="h1 d-flex flex-column justify-content-center align-items-center pt-5">EEIL-Style Citation</div>
            <EeilWebsite />
            <EeilMonography />
            <EeilPeriodic />
        </>
    )
}