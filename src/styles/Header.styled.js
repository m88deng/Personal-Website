import { styled } from "styled-components";

export const StyledHeader = styled.div`
  width: 100vw !important;
  padding: 0;
  margin: 0;
  position: sticky;
  top: 0;
  -webkit-backdrop-filter: blur(12px);
	backdrop-filter: blur(12px);
  mask: linear-gradient(black 30%, black 70%, transparent 100%);

  #logo {
    font-weight: 700 !important;
    letter-spacing: 5%;
    cursor: pointer;
  }
  .tabs{
    width: 50%;
  }
  .settings{
    width: 15%;
  }
  #placeholder{
    user-select: none;
    -webkit-user-select: none;
  }
`;

export const StyledNav = styled.div`
  padding: 0.25rem 1rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-foreground);
`;

export const StyledHamburgerMenu = styled.div`
padding-bottom: 8px;
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;

  .line {
    width: 25px;
    height: 3px;
    background-color: var(--color-foreground);
    transition: transform 0.3s ease;

    &.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    &.open:nth-child(2) {
      opacity: 0;
    }

    &.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }
  }

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const StyledOpenMenuDiv = styled.div`
  width: 130px;
  position: absolute;
  left: 35px;
  top: 80px;
  z-index: 5; 
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 2px 6px 32px -5px rgba(0, 0, 0, 0.2);    
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
`;