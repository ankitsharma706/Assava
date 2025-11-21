import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* MAIN WRAPPER */
const FilterWrapper = styled.div`
  width: 100%;
  padding: 1rem 1.5rem;
  background: transparent;

  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

/* NAV LIST */
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;

  font-size: clamp(1rem, 2.3vw, 1.5rem);

  @media (max-width: 768px) {
    gap: 1.4rem;
    padding-bottom: 0.5rem;
  }

  /* Smooth scroll for mobile */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/* NAV LINK STYLE */
const LinkItem = styled(NavLink)`
  text-decoration: none;
  padding: 0.6rem 0.4rem;
  color: aliceblue;
  border-bottom: 2px solid transparent;
  transition: 0.3s ease;

  &.active {
    font-weight: bold;
    ${'' /* border-color: #ffffff; */}
  }

  &:hover {
    opacity: 0.8;
  }
`;

/* SELECT DROPDOWN */
const StyledSelect = styled.select`
  padding: 0.6rem 1rem;
  ${'' /* background: #7a7a7a; */}   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  color: white;
  border-radius: 6px;
  border: none;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  option {
    ${'' /* background: #5a5a5a; */}
       background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
    color: white;
    padding: 0.6rem;
  }
`;

function FilterBoxs() {
  return (
    <FilterWrapper>
      <nav>
        <NavList>
          <li>
            <LinkItem to="/shopping">Best Selling</LinkItem>
          </li>
          <li>
            <LinkItem to="/shopping?type=night">Night Coffee</LinkItem>
          </li>
          <li>
            <LinkItem to="/shopping?type=day">Day Coffee</LinkItem>
          </li>
          <li>
            <LinkItem to="/shopping?type=new">New Arrival</LinkItem>
          </li>
          <li>
            <LinkItem to="/shopping?type=office">Office Coffee</LinkItem>
          </li>

          {/* SORT DROPDOWN */}
          <li>
            <StyledSelect>
              <option>Sort by Price (Low → High)</option>
              <option>Sort by Price (High → Low)</option>
              <option>Sort by Name (A → Z)</option>
              <option>Sort by Name (Z → A)</option>
              <option>Sort by Discount (Low → High)</option>
              <option>Sort by Discount (High → Low)</option>
            </StyledSelect>
          </li>
        </NavList>
      </nav>
    </FilterWrapper>
  );
}

export default FilterBoxs;
