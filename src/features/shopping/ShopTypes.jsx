import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  /* gap: 0.3rem; */
  list-style: none;
`;
const ShoppingTypes = styled.div`
  height: auto;
  width: 15%;
  /* background: #eb0d0d; */
  color: aliceblue;
  font-size: 30px;
  padding-left: 40px;
  /* padding-top: 15px; */
  & select {
    border: none;
    font-size: 24px;
    background: #979797;
    color: aliceblue;
    padding: 25px 0 25px 2px;
    margin-left: 2px;
    margin-right: 25px;
    border-radius: 8px;
  }
`;
const ShoppingTypesBox = styled.div`
  height: 70px;
  width: 100%;
  background: #20b9ff;
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    margin: 5px;
    display: flex;

    text-decoration: none;
    color: aliceblue;

    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    transition: all 0.3s;
    cursor: pointer;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    /* color: #c9e6ff; */
  }
`;
function ShopTypes() {
  return (
    <ShoppingTypes>
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/shopping">
              <span>All</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">
              <span>Instant</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">
              <span>Brew</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">
              <span>Hot-Coffee</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">
              <select name="sort" id="sorts">
                <option value="op1">Roast Level</option>
                <option value="op1">Roast - Light</option>
                <option value="op1">Roast - Medium</option>
                <option value="op1">Roast - Dark</option>
                <option value="op1">Roast - French</option>
                <option value="op1">Roast - High</option>
              </select>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/shopping">
              <span>Flavour </span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">
              <span>Arabica</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">
              <span>Robusta</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">
              <span>Libercia</span>
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/shopping">
              <span>Excelsa </span>
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </ShoppingTypes>
  );
}

export default ShopTypes;
