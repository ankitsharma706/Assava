import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavListFilter = styled.ul`
  gap: 3.3rem;
  display: flex;
  list-style: none;
  justify-content: flex-end;
  font-size: 32px;
  & select{
    border: none;
    font-size: 20px;
    background: #7a7a7a;;
    color: aliceblue;
    padding: 15px;
    margin-top: 25px;
    margin-right: 25px;
    border-radius: 5px;
    &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    border: none;
  }
  }
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

const FilterBox = styled.div`
  height: 100px;
  width: 100%;
  /* background: #ffb820; */
`;
function FilterBoxs() {
  return (
    <FilterBox>
    <nav>
      <NavListFilter>
        <li>
          <StyledNavLink to="/shopping">
            <span>Best Selling</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/shopping">
            <span>Night Coffee</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/shopping">
            <span>Day Coffee</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/shopping">
            <span>New-Arrival</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/shopping">
            <span>Office Coffee</span>
          </StyledNavLink>
        </li>
        <li>
          <select name="sort" id="shopping">
            <option value="op1">Sort by Price</option>
            <option value="op1">Sort by Price</option>
            <option value="op1">Sort by Name-asc</option>
            <option value="op1">Sort by Name-desc</option>
            <option value="op1">Sort by Discount-asc</option>
            <option value="op1">Sort by Discount-desc</option>
          </select>
        </li>
      </NavListFilter>
    </nav>
  </FilterBox>
  )
}

export default FilterBoxs
