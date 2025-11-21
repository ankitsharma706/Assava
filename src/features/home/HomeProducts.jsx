import styled from "styled-components";
import ShoppingCard from "../shopping/ShoppingCard";

/* --- WRAPPERS --- */

const Section = styled.section`
  width: 100%;
  ${'' /* background: #9b9a9a; */}
  padding: 4rem 1rem;
  color: white;
`;

const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 3rem;
  font-weight: bold;
`;

/* GRID FOR PRODUCTS */
const ProductGrid = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  gap: 2rem;

  /* 3 columns desktop */
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

function HomeProducts() {
  return (
    <>
      {/* TOP PRODUCTS */}
      <Section>
        <Title>Our Top Products</Title>

        <ProductGrid>
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
        </ProductGrid>
      </Section>

      {/* BEST PRODUCTS */}
      <Section>
        <Title>Our Best Products</Title>

        <ProductGrid>
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
        </ProductGrid>
      </Section>
    </>
  );
}

export default HomeProducts;
