import { useEffect, useRef, useState } from "react";

import { IoInvertMode } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CategoryBox from "../hooks/CategoryBox";
import SearchBar from "./SearchBar";

const HeaderMenu = styled.div`
  display: flex;
  position: relative;
  /* gap: 0.4rem; */
`;
const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  list-style: none;
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    margin: 5px;
    display: flex;
    align-items: center;
    /* gap: 1.2rem; */
    text-decoration: none;
    color: aliceblue;
    font-size: 1.5rem;
    font-weight: 500;
    padding: 1.2rem 1.2rem;
    transition: all 0.3s;
  }
  & VscAccount {
    margin-left: 3px;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited,  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;
const Bs = styled.div`
  /* display: rela; */
  position: relative;
`;

const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: #ffffff;
  color: #000000;
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 6px;
  position: absolute;
  bottom: -120%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 14;
  white-space: nowrap;
`;

function HeaderMenus() {
  const [showModal, setShowModal] = useState(false);
  const modalref = useRef();

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const handleOutside = (e) => {
      // console.log("Click event:", e.target);
      if (modalref.current && !modalref.current.contains(e.target)) {
        // console.log("Click outside - closing modal");
        closeModal();
      }
    };
    if (showModal) {
      document.addEventListener("mousedown", handleOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [showModal]);

  return (
    <HeaderMenu>
      <nav>
        <NavList>
          <li>
            <SearchBar />
          </li>

          <li>
            <StyledNavLink onClick={() => setShowModal(true)}>
              <Bs>

              <span>Category</span>
              {showModal && (<>
                <CategoryBox closeModal={closeModal} ref={modalref} />
              </>
              )}
              </Bs>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about" onClick={closeModal}>
              <span>About us</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/cart">
              <IconWrapper>
                <TiShoppingCart />
                <Tooltip>Cart</Tooltip>
              </IconWrapper>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/home">
              <IconWrapper>
                <IoInvertMode />
                {/* <IoInvertModeOutline /> */}

                <Tooltip>Dark Mode</Tooltip>
              </IconWrapper>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/account">
              <IconWrapper>
                <span> Ankit </span>
                <VscAccount />
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
