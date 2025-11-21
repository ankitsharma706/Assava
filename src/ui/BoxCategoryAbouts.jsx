import styled from "styled-components";
import { NavLink } from "react-router-dom";
import BoxAbouts from "./BoxAbouts";

/* OUTER WRAPPER */
const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem;

  display: flex;
  justify-content: center;
`;

/* GRID CONTAINER (3 categories + About box) */
const Grid = styled.div`
  width: 100%;
  max-width: 1300px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/* CATEGORY LIST */
const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  background: #2f2f2f;
  border-radius: 12px;
  padding: 1.5rem;

  color: white;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

/* CATEGORY HEADING */
const Heading = styled.div`
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffc16b;
`;

/* LINKS */
const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 0.4rem 0.6rem;
  border-radius: 6px;

  &:hover {
    background: #505050;
  }
`;

function BoxCategoryAbouts() {
  return (
    <Wrapper>
      <Grid>
        {/* CATEGORY COLUMN 1 */}
        <CategoryList>
          <Heading>COFFEE</Heading>
          <li><LinkStyled to="/shopping">Brew</LinkStyled></li>
          <li><LinkStyled to="/shopping">Instant</LinkStyled></li>
          <li><LinkStyled to="/shopping">Hot Coffee</LinkStyled></li>
          <li><LinkStyled to="/shopping">Flavour</LinkStyled></li>
          <li><LinkStyled to="/shopping">Fresh</LinkStyled></li>
          <li><LinkStyled to="/shopping">Pure Beans</LinkStyled></li>
          <li><LinkStyled to="/shopping">Classic</LinkStyled></li>
          <li><LinkStyled to="/shopping">Arabica</LinkStyled></li>
        </CategoryList>

        {/* CATEGORY COLUMN 2 */}
        <CategoryList>
          <Heading>ASSAVA</Heading>
          <li><LinkStyled to="/shopping">New-Arrival</LinkStyled></li>
          <li><LinkStyled to="/shopping">Libercia</LinkStyled></li>
          <li><LinkStyled to="/shopping">Excelsa</LinkStyled></li>
          <li><LinkStyled to="/shopping">Day Coffee</LinkStyled></li>
          <li><LinkStyled to="/shopping">Night Coffee</LinkStyled></li>
          <li><LinkStyled to="/shopping">Pure Beans</LinkStyled></li>
          <li><LinkStyled to="/shopping">Robusta</LinkStyled></li>
        </CategoryList>

        {/* CATEGORY COLUMN 3 */}
        <CategoryList>
          <Heading>ABOUT</Heading>
          <li><LinkStyled to="/about">How We Started</LinkStyled></li>
          <li><LinkStyled to="/about">Co-founder</LinkStyled></li>
          <li><LinkStyled to="/about">Investor</LinkStyled></li>
          <li><LinkStyled to="/about">Privacy</LinkStyled></li>
          <li><LinkStyled to="/about">Bulk Sales</LinkStyled></li>
          <li><LinkStyled to="/about">Terms & Condition</LinkStyled></li>
        </CategoryList>

        {/* BOX ABOUT (Image + Description) */}
        <BoxAbouts />
      </Grid>
    </Wrapper>
  );
}

export default BoxCategoryAbouts;
