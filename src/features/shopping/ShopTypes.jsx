import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* SIDEBAR WRAPPER */
const Wrapper = styled.aside`
  width: 250px;
  min-width: 220px;
  height: 1000px;
  background: linear-gradient(
    to right,
    #4a2e05,
    #bc8c2a,
    #4a2e05
  );
  padding: 1rem 1.5rem;
  border-radius: 8px;

  @media (max-width: 900px) {
    width: 100%;
    min-width: 100%;
  }
`;

/* FIXED PANEL (Always Visible Now) */
const Panel = styled.div`
  background: linear-gradient(
    to right,
    #4a2e05,
    #bc8c2a,
    #4a2e05
  );
  border-radius: 10px;
  padding: 1rem;
`;

/* CATEGORY LIST */
const CategoryList = styled.ul`
  list-style: none;
  padding: 0rem;
  margin: 1rem 0;
  width: 70%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const CategoryLink = styled(NavLink)`
  padding: 0.6rem 1rem;
  margin-top: 32px;
  margin-bottom: 32px;

  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;

  &:hover {
    opacity: 0.85;
  }
`;

/* SELECT DROPDOWN */
const VerticalSelect = styled.select`
  width: 100%;
  padding: 0.7rem 2rem;
  margin-top: 30px;

  background: linear-gradient(
    to right,
    #4a2e05,
    #bc8c2a,
    #4a2e05
  );
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;

  option {
    background: linear-gradient(
      to right,
      #4a2e05,
      #bc8c2a,
      #4a2e05
    );
  }
`;

function ShopTypes() {
  return (
    <Wrapper>
      <Panel>
        <nav>
          <CategoryList>
            <li><CategoryLink to="/shopping">All</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=instant">Instant</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=brew">Brew</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=hot">Hot Coffee</CategoryLink></li>
          </CategoryList>

          <VerticalSelect>
            <option>Roast Level</option>
            <option>Light Roast</option>
            <option>Medium Roast</option>
            <option>Dark Roast</option>
            <option>French Roast</option>
            <option>High Roast</option>
          </VerticalSelect>

          <CategoryList>
            <li><CategoryLink to="/shopping?type=flavour">Flavour</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=arabica">Arabica</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=robusta">Robusta</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=libercia">Libercia</CategoryLink></li>
            <li><CategoryLink to="/shopping?type=excelsa">Excelsa</CategoryLink></li>
          </CategoryList>
        </nav>
      </Panel>
    </Wrapper>
  );
}

export default ShopTypes;
