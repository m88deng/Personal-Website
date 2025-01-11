import { StyledHeader, StyledNav } from "../../styles/Header.styled"
export default function EeilHeader() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <StyledHeader className="d-flex justify-content-between align-items-center pt-4 pb-4 px-5" style={{ zIndex: '4' }}>
            <StyledNav className="h4" href="/" onClick={scrollToTop} id="logo" >Melissa</StyledNav>
            <h3 id="placeholder">|</h3>
            <StyledNav className="h4" href="/eeilcitation#website">Site Internet</StyledNav>
            <StyledNav className="h4" href="/eeilcitation#monography">Monographie</StyledNav>
            <StyledNav className="h4" href="/eeilcitation#periodic">Périodique</StyledNav>
            <StyledNav className="h4" href="/eeilcitation#govpub">Publication gouvernementale</StyledNav>
            <StyledNav className="h4" href="/eeilcitation#reference">Ouvrage de référence</StyledNav>
            <StyledNav className="h4" href="/eeilcitation#quot">Quotidien</StyledNav>
            <StyledNav className="h4" href="/eeilcitation#blog">Blog</StyledNav>
        </StyledHeader >
        // <StyledHeader className="header d-flex justify-content-between align-items-center pt-3 pb-4 px-5" style={{ zIndex: "4" }}>
        //     <div className="d-flex tabs flex-row justify-content-between align-items-center">
        //         <StyledNav href="/" onClick={scrollToTop} id="logo" className="h4" >Melissa</StyledNav>
        //         <h3 id="placeholder">|</h3>
        //         <StyledNav className="h4" href="/eeilcitation#website">Site Internet</StyledNav>
        //         <StyledNav className="h4" href="/eeilcitation#monography">Monographie</StyledNav>
        //         <StyledNav className="h4" href="/eeilcitation#periodic">Périodique</StyledNav>
        //     </div>
        //     <div className="tabs d-flex flex-row justify-content-between align-items-center"></div>
        //     <div className="tabs d-flex flex-row justify-content-between align-items-center"></div>
        // </StyledHeader>
    )
}