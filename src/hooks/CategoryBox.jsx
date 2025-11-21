// src/components/ui/CategoryBox.jsx
import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

/* ---- ANIMATIONS ---- */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-8px) scale(0.995); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

/* ---- BACKDROP ---- */
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  ${'' /* background: rgba(4, 6, 10, 0.6); */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1200;
`;

/* ---- MODAL SHELL (CENTERED) ---- */
const Modal = styled.div`
  width: min(92%, 980px);
  max-width: 980px;
  ${'' /* background: #6f6f6f; */} background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
  animation: ${fadeIn} 220ms ease-out;
  display: flex;
  gap: 1rem;

  @media (max-width: 880px) {
    flex-direction: column;
    padding: 0.75rem;
  }
`;

/* ---- COLUMN (nav list) ---- */
const Column = styled.nav`
  flex: 1;
  min-width: 180px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  @media (max-width: 880px) {
    max-width: 100%;
    width: 100%;
  }
`;

/* ---- COLUMN TITLE ---- */
const Title = styled.h4`
  margin: 0;
  padding: 0.6rem 0.6rem;
  font-size: 1.05rem;
  color: #f5f5f5;
  background: rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  text-align: center;
`;

/* ---- NAV LIST ---- */
const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

/* ---- LINK ---- */
const CategoryLink = styled(NavLink)`
  display: block;
  padding: 0.58rem 0.8rem;
  color: #f0f0f0;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background 160ms, color 160ms;
  &:hover { background: rgba(255,255,255,0.06); }
  &.active {
    ${'' /* background: #ffffff; */}
    ${'' /* color: #333333; */}
    font-weight: 700;
  }
`;

/* ---- FOOTER / CLOSE ---- */
const Footer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  padding-top: 0.6rem;
  width: 100%;
`;

/* ---- UTILS ---- */
const SmallButton = styled.button`
  background: #2f80ed;
  color: white;
  border: none;
  padding: 0.6rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  &:hover { opacity: 0.94; }
`;

/* ---- COMPONENT ---- */
function CategoryBox({ closeModal, initialFocusRef = null }) {
  const previouslyFocused = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    // Save previous focus and move focus to modal for accessibility
    previouslyFocused.current = document.activeElement;
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else if (modalRef.current) {
      modalRef.current.focus();
    }

    function onKey(e) {
      if (e.key === "Escape") {
        closeModal?.();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      // restore focus
      try {
        previouslyFocused.current?.focus?.();
      } catch (err) { }
    };
  }, [closeModal, initialFocusRef]);

  function handleBackdropClick(e) {
    // close only if clicked backdrop (not inside modal)
    if (e.target === e.currentTarget) closeModal?.();
  }

  // when clicking a category, close modal (router handles navigation)
  function handleNavClick() {
    closeModal?.();
  }

  return (
    <Backdrop onMouseDown={handleBackdropClick} aria-modal="true" role="dialog" aria-label="Category selector">
      <Modal ref={modalRef} tabIndex={-1}>
        <Column aria-labelledby="cat-coffee">
          <Title id="cat-coffee">COFFEE</Title>
          <NavList>
            <li><CategoryLink to="/shopping?type=instant" onClick={handleNavClick}>Instant</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=brew" onClick={handleNavClick}>Brew</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=hot" onClick={handleNavClick}>Hot Coffee</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=flavour" onClick={handleNavClick}>Flavour</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=roasted" onClick={handleNavClick}>Roasted</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=beans" onClick={handleNavClick}>Pure Beans</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=classic" onClick={handleNavClick}>Classic</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=arabica" onClick={handleNavClick}>Arabica</CategoryLink></li>
          </NavList>
        </Column>

        <Column aria-labelledby="cat-assava">
          <Title id="cat-assava">ASSAVA</Title>
          <NavList>
            <li><CategoryLink to="/orderHistory" onClick={handleNavClick}>Your Order</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=new" onClick={handleNavClick}>New-Arrival</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=libercia" onClick={handleNavClick}>Libercia</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=excelsa" onClick={handleNavClick}>Excelsa</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=day" onClick={handleNavClick}>Day Coffee</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=night" onClick={handleNavClick}>Night Coffee</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=pure" onClick={handleNavClick}>Pure Beans</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=robusta" onClick={handleNavClick}>Robusta</CategoryLink></li>
          </NavList>
        </Column>

        <Column aria-labelledby="cat-about">
          <Title id="cat-about">ABOUT</Title>
          <NavList>
            <li><CategoryLink to="/about#how-we-started" onClick={handleNavClick}>How We Started</CategoryLink></li>
            <li><CategoryLink to="/about#cofounder" onClick={handleNavClick}>Co-founder</CategoryLink></li>
            <li><CategoryLink to="/about#investors" onClick={handleNavClick}>Investor</CategoryLink></li>
            <li><CategoryLink to="/about#privacy" onClick={handleNavClick}>Privacy</CategoryLink></li>
            <li><CategoryLink to="/about#bulk" onClick={handleNavClick}>Bulk Sales</CategoryLink></li>
            <li><CategoryLink to="/about#terms" onClick={handleNavClick}>Terms &amp; Conditions</CategoryLink></li>
          </NavList>

          <Footer>
            <SmallButton onClick={() => closeModal?.()}>Close</SmallButton>
          </Footer>
        </Column>
      </Modal>
    </Backdrop>
  );
}

export default CategoryBox;
