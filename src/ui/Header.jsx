import styled from "styled-components";
import HeaderMenus from "./HeaderMenus";
import UserAvatars from "./UserAvatars";

/* MAIN HEADER WRAPPER */
const Headers = styled.header`
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
  background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);

  color: white;

  position: sticky;
  top: 0;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

/* FLEX WRAPPER FOR LEFT SIDE */
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function Header() {
  return (
    <Headers>
      <LeftSection>
        <UserAvatars />
      </LeftSection>

      <HeaderMenus />
    </Headers>
  );
}

export default Header;
