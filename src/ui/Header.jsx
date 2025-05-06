import styled from "styled-components";
import HeaderMenus from "./HeaderMenus";
import UserAvatars from "./UserAvatars";
const Headers = styled.div`
  height: 170px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* background: #ff2020; */
`;

function Header() {
  return (
    <Headers>
      <UserAvatars/>
      <HeaderMenus />
    </Headers>
  );
}

export default Header;
