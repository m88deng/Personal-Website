import React, { useContext, useState, useEffect } from "react";
import Headroom from "react-headroom"
import { StyledHeader, StyledNav, StyledHamburgerMenu, StyledOpenMenuDiv } from "../styles/Header.styled";
import { Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "./LanguageContext";

export default function Header() {
    const [headerVisible, setHeaderVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    const { language, setLanguage } = useContext(LanguageContext);
    const [t] = useTranslation("global");

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 600);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!headerVisible) {
            const timeout = setTimeout(() => {
                setHeaderVisible(true);
            }, 2000);

            return () => clearTimeout(timeout);
        }
    }, [headerVisible]);

    const handleChange = (event) => {
        setLanguage(event.target.value); // Update language
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false);
        setHeaderVisible(false);
    };

    return (
        <Headroom>
            {headerVisible && (
                <StyledHeader className="header d-flex justify-content-between align-items-center pt-3 pb-4 px-5" style={{ zIndex: "4" }}>
                    <div className="d-flex flex-row align-items-center pt-1 mt-1">
                        {isMobile && (
                            <StyledHamburgerMenu onClick={() => setMenuOpen(!menuOpen)}>
                                <div className={`line ${menuOpen ? "open" : ""}`} />
                                <div className={`line ${menuOpen ? "open" : ""}`} />
                                <div className={`line ${menuOpen ? "open" : ""}`} />
                            </StyledHamburgerMenu>
                        )}
                        <StyledNav onClick={scrollToTop} id="logo" className="h4" >Melissa</StyledNav>
                    </div>
                    {!isMobile ? (
                        <div className="d-flex flex-row align-items-center p-0 m-0">
                            <StyledNav href="/#about">{t("navbar.about")}</StyledNav>
                            <StyledNav href="/#experience">{t("navbar.experience")}</StyledNav>
                            <StyledNav href="/#projects">{t("navbar.projects")}</StyledNav>
                        </div>
                    ) : null}
                    <div className="settings d-flex flex-row justify-content-end align-items-center pt-0 mt-0">
                        <StyledNav className="pr-4">
                            <Select value={language || 'English'} onChange={handleChange}
                                sx={{
                                    color: 'var(--color-foreground)',
                                    border: 'none',
                                    boxShadow: 'none',
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: 'none',
                                    },
                                    '& .MuiMenuItem-root:hover': {
                                        backgroundColor: 'yellow',
                                        color: 'green',
                                    }
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        style: {
                                            background: 'rgba(255, 255, 255, 0.35)',
                                            WebkitBackdropFilter: 'blur(4px)',
                                            backdropFilter: 'blur(4px)'
                                        },
                                    },
                                }}>
                                <MenuItem className="menuItem" value={"English"}>English</MenuItem>
                                <MenuItem className="menuItem" value={"Français"}>Français</MenuItem>
                                <MenuItem className="menuItem" value={"中文"}>中文</MenuItem>
                            </Select>
                        </StyledNav>
                    </div>
                </StyledHeader >
            )}
            {isMobile && menuOpen ? (
                <StyledOpenMenuDiv className="d-flex flex-column justify-content-center py-2">
                    <StyledNav href="/#about" onClick={handleMenuItemClick}>{t("navbar.about")}</StyledNav>
                    <StyledNav href="/#experience" onClick={handleMenuItemClick}>{t("navbar.experience")}</StyledNav>
                    <StyledNav href="/#projects" onClick={handleMenuItemClick}>{t("navbar.projects")}</StyledNav>
                </StyledOpenMenuDiv>
            ) : null}
        </Headroom>
    );
};
