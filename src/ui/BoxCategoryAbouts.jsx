import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BoxAbouts from "./BoxAbouts";

const TitleTag = styled.div`
  /* background: #c9b233; */
  /* padding-top: 8px; */
  text-align: center;
  font-size: x-large;
  margin-bottom: 1rem;
  color: aliceblue;
  /* margin: 2px; */
`;
const BoxCategoryAbout = styled.div`
  height: 442px;
  width: 70%;
  /* background: #30d461; */
  position: relative;

  left: 15%;
  right: 15%;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  justify-content: space-around;
`;
const NavList = styled.ul`
  height: 400px;
  width: 250px;
  /* background: #3f22e0; */
  display: flex;
  text-align: left;
  flex-direction: column;
  list-style: none;
  /* padding: 1rem; */
  margin-top: 40px;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    /* margin: 5px; */
    padding-top: 5px;
    align-items: center;
    display: block;
    text-decoration: none;
    color: aliceblue;
    font-size: 1.2rem;
    font-weight: 500;
    /* padding: 1.2rem 1.2rem; */
    padding-left: 1.2rem;
    padding-top: 1rem;
    padding-right: 1.2rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    /* color: #9dd1fd; */
  }
`;
function BoxCategoryAbouts() {
  return (
    <BoxCategoryAbout>
      <nav aria-label="Product Categories">
        <NavList>
          <TitleTag>COFFEE</TitleTag>
          <li>
            <StyledNavLink to="/shopping">Brew</StyledNavLink>
          </li>
          <li>
          </li>
            <StyledNavLink to="/shopping">Instant</StyledNavLink>
          <li>
            <StyledNavLink to="/shopping">Hot Coffee</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Flavour</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Fresh</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Pure Beans</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Classic</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Arabica</StyledNavLink>
          </li>
        </NavList>
      </nav>

      <nav aria-label="ASSAVA Categories">
        <NavList>
          <TitleTag>ASSAVA</TitleTag>
          <li>
            <StyledNavLink to="/shopping">New-Arrival</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Libercia</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Excelsa</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Day Coffee</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Night Coffee</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Pure Beans</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping">Robusta</StyledNavLink>
          </li>
        </NavList>
      </nav>

      <nav aria-label="About Categories">
        <NavList>
          <TitleTag>ABOUT</TitleTag>
          <li>
            <StyledNavLink to="/about">How We Started</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">Co-founder</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">Investor</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">Privacy</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/about">Bulk Sales</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about">Terms & Condition</StyledNavLink>
          </li>
        </NavList>
      </nav>

      <BoxAbouts />
    </BoxCategoryAbout>
  );
}

export default BoxCategoryAbouts;
