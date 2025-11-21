import styled from "styled-components";
import CustomersReview from "../features/home/CustomersReview";
import Franchasises from "../features/home/Franchasises";
import HomeProducts from "../features/home/HomeProducts";
import HowItsWork from "../features/home/HowItsWork";
import OurPartner from "../features/home/OurPartner";

/* HERO SECTION */
const HeroSection = styled.section`
  width: 100%;
  min-height: 70vh;
  background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  /* Replace this with your hero content later */
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
`;

/* MAIN PAGE WRAPPER */
const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${'' /* gap: 1rem; */}

  @media (max-width: 768px) {
    gap: 2.5rem;
  }
`;

function Home() {
  return (
    <PageWrapper>
      {/* HERO SECTION */}
      <HeroSection>
        {/* Put your banner / hero image or text here */}
        Welcome to Assava Coffee
      </HeroSection>

      {/* HOME SECTIONS */}
      <HomeProducts />
      <OurPartner />
      <Franchasises />
      <HowItsWork />
      <CustomersReview />
    </PageWrapper>
  );
}

export default Home;
