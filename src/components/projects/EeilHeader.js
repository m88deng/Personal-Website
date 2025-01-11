import { StyledHeader, StyledNav } from "./../../styles/Header.styled"
import { Link } from "react-router-dom";
import Headroom from "react-headroom";
export default function EeilHeader() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMenuItemClick = (event, targetId) => {
        event.stopPropagation();
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Headroom>
            <StyledHeader className="d-flex justify-content-between align-items-center pt-4 pb-4 px-5" style={{ zIndex: '4' }}>
                <Link to="/" style={{textDecoration: 'none'}}><StyledNav className="h4" onClick={scrollToTop} id="logo" >Melissa</StyledNav></Link>
                <h3 id="placeholder">|</h3>
                <StyledNav className="h4" onClick={(event) => { handleMenuItemClick(event, "website") }}>Site Internet</StyledNav>
                <StyledNav className="h4" onClick={(event) => { handleMenuItemClick(event, "monography") }}>Monographie</StyledNav>
                <StyledNav className="h4" onClick={(event) => { handleMenuItemClick(event, "periodic") }} >Périodique</StyledNav>
                <StyledNav className="h4" onClick={(event) => { handleMenuItemClick(event, "govpub") }} >Publication gouvernementale</StyledNav>
                <StyledNav className="h4" onClick={(event) => { handleMenuItemClick(event, "reference") }} >Ouvrage de référence</StyledNav>
                <StyledNav className="h4" onClick={(event) => { handleMenuItemClick(event, "quot") }} >Quotidien</StyledNav>
                <StyledNav className="h4" onClick={(event) => { handleMenuItemClick(event, "blog") }} >Blog</StyledNav>
            </StyledHeader >
        </Headroom>
    )
}