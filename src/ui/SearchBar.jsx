import { useEffect, useRef, useState } from "react";
import { GrSearch } from "react-icons/gr";
import styled from "styled-components";
import SearchBox from "../hooks/SearchBox";

/* SEARCH ICON BUTTON */
const SearchButton = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: aliceblue;
  font-size: 1.5rem;
  cursor: pointer;

  padding: 1.2rem;
  border-radius: 8px;
  transition: 0.25s ease;

  &:hover {
    opacity: 0.75;
  }
`;

/* TOOLTIP WRAPPER */
const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

/* TOOLTIP */
const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;

  position: absolute;
  bottom: -140%;
  left: 50%;
  transform: translateX(-50%);

  background: white;
  color: black;

  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 6px;

  z-index: 21;
  white-space: nowrap;
`;

/* MODAL OVERLAY */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 14;
`;

function SearchBar() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  /* CLOSE MODAL ON OUTSIDE CLICK */
  useEffect(() => {
    const handleOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
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
    <>
      {/* SEARCH ICON */}
      <SearchButton onClick={openModal}>
        <IconWrapper>
          <GrSearch />
          <Tooltip>Search</Tooltip>
        </IconWrapper>
      </SearchButton>

      {/* OVERLAY - CLICK TO CLOSE */}
      {showModal && <Overlay />}

      {/* SEARCH MODAL */}
      {showModal && (
        <div
          ref={modalRef}
          style={{
            position: "fixed",
            top: "15vh",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
          }}
        >
          <SearchBox closeModal={closeModal} />
        </div>
      )}
    </>
  );
}

export default SearchBar;
