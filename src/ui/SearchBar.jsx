import { useEffect, useRef, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchBox from "../hooks/SearchBox";
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
  &.active:visited {
    /* color: #9dd1fd; */
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
function SearchBar() {
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
    <StyledNavLink to="/search">
      <IconWrapper>
        <GrSearch />
        {showModal && <SearchBox closeModal={closeModal}/>}
        <Tooltip>Search</Tooltip>
      </IconWrapper>
    </StyledNavLink>
  );
}

export default SearchBar;
