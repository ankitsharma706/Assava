import styled, { keyframes } from "styled-components";
import FilterBoxs from "../features/shopping/FilterBoxs";
import ShoppingCard from "../features/shopping/ShoppingCard";
import ShopTypes from "../features/shopping/ShopTypes";
import Footer from "../ui/Footer";

/* ------------------ ANIMATIONS ------------------ */

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const cardPop = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

/* ------------------ MAIN WRAPPER ------------------ */

const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${fadeIn} 0.6s ease;
`;

/* TOP FILTER BAR */
const TopFilterSection = styled.div`
  width: 100%;
  max-width: 1500px;

  display: flex;
  justify-content: center;
  margin-top: 1rem;
  animation: ${fadeIn} 0.6s ease;
`;

/* MAIN CONTENT */
const Content = styled.div`
  width: 100%;
  max-width: 1500px;
  display: grid;

  grid-template-columns: 260px auto;
  gap: 2rem;

  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

/* PRODUCT GRID — EXACT 4 CARDS PER ROW */
const ProductGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;

  /* EXACT 4 CARDS */
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/* CARD WRAPPER WITH ANIMATION */
const AnimatedCard = styled.div`
  animation: ${cardPop} 0.5s ease forwards;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

/* ------------------ COMPONENT ------------------ */

function Shopping() {
  return (
    <PageWrapper>

      {/* TOP FILTER BAR */}
      <TopFilterSection>
        <FilterBoxs />
      </TopFilterSection>

      {/* MAIN CONTENT */}
      <Content>

        {/* LEFT SIDEBAR */}
        <ShopTypes />

        {/* PRODUCT GRID WITH ANIMATION */}
        <ProductGrid>
          {Array.from({ length: 12 }).map((_, i) => (
            <AnimatedCard key={i}>
              <ShoppingCard />
            </AnimatedCard>
          ))}
        </ProductGrid>

      </Content>

      {/* FOOTER */}
      {/* <Footer /> */}

    </PageWrapper>
  );
}

export default Shopping;
