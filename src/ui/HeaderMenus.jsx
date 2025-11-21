import { useEffect, useRef, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { TiShoppingCart } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CategoryBox from "../hooks/CategoryBox";
import SearchBox from "../hooks/SearchBox";
import ThemeSwitcher from "./ThemeSwitcher";

/* WRAPPERS */
const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  z-index: 20;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: aliceblue;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.25s ease;

  &:hover { opacity: 0.7; }
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

/* TOOLTIP */
const Tooltip = styled.span`
  opacity: 0;
  visibility: hidden;

  position: absolute;
  bottom: -145%;
  left: 50%;
  transform: translateX(-50%);

  background: white;
  color: black;

  padding: 4px 8px;
  border-radius: 6px;

  font-size: 0.75rem;
  font-weight: 600;

  transition: 0.25s ease;
  white-space: nowrap;
  z-index: 30;
`;

/* CATEGORY BTN */
const CategoryButton = styled.button`
  padding: 8px 18px;
  
  color: #333;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;

  &:hover { background: white; }
`;

/* BLUR OVERLAYS */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.28);
  backdrop-filter: blur(4px);
  z-index: 20;
  animation: fadeIn .3s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

/* CENTERED BLUR MODAL */
const AnimatedBlurModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;

  width: 850px;
  max-width: 90%;
  padding: 20px;

  backdrop-filter: blur(18px);
  background: rgba(255,255,255,0.12);
  border-radius: 16px;

  animation: popin .35s ease;

  @keyframes popin {
    0% { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
    100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }
`;

const AnimatedSearchModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;

  width: 650px;
  max-width: 90%;
  max-height: 80vh;         /* ⭐ Limit modal height */
  overflow-y: auto;         /* ⭐ Scroll inside */
  padding: 20px;

  backdrop-filter: blur(18px);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;

  animation: searchZoom .35s ease forwards;

  @keyframes searchZoom {
    0% {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  /* Optional: hidden scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.3);
    border-radius: 20px;
  }
`;



function HeaderMenus() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const modalRef = useRef();

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowSearchModal(false);
        setShowCategoryModal(false);
      }
    };

    if (showSearchModal || showCategoryModal) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showSearchModal, showCategoryModal]);

  return (
    <HeaderMenu>
      <nav>
        <NavList>

          {/* SEARCH */}
          <li>
            <StyledNavLink
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setShowSearchModal(true);
              }}
            >
              <IconWrapper>
                <GrSearch size={22} />
                <Tooltip>Search</Tooltip>
              </IconWrapper>
            </StyledNavLink>

            {showSearchModal && (
              <>
                <Overlay onClick={() => setShowSearchModal(false)} />
                <AnimatedSearchModal ref={modalRef}>
                  <SearchBox closeModal={() => setShowSearchModal(false)} />
                </AnimatedSearchModal>
              </>
            )}
          </li>

          {/* CATEGORY */}
          <li>
            <CategoryButton onClick={() => setShowCategoryModal(true)}>
              Category
            </CategoryButton>

            {showCategoryModal && (
              <>
                <Overlay onClick={() => setShowCategoryModal(false)} />
                <AnimatedBlurModal ref={modalRef}>
                  <CategoryBox closeModal={() => setShowCategoryModal(false)} />
                </AnimatedBlurModal>
              </>
            )}
          </li>

          {/* ABOUT */}
          <li>
            <StyledNavLink to="/about">About Us</StyledNavLink>
          </li>

          {/* CART */}
          <li>
            <StyledNavLink to="/cart">
              <IconWrapper>
                <TiShoppingCart size={24} />
                <Tooltip>Cart</Tooltip>
              </IconWrapper>
            </StyledNavLink>
          </li>

          {/* DARK MODE */}
          <li>
            <IconWrapper>
              <ThemeSwitcher />
              <Tooltip>Dark Mode</Tooltip>
            </IconWrapper>
          </li>

          {/* ACCOUNT */}
          <li>
            <StyledNavLink to="/account">
              <IconWrapper>
                <span style={{ marginRight: 5 }}>Ankit</span>
                <VscAccount size={22} />
                <Tooltip>Account</Tooltip>
              </IconWrapper>
            </StyledNavLink>
          </li>

        </NavList>
      </nav>
    </HeaderMenu>
  );
}

export default HeaderMenus;
