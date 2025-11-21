import styled from "styled-components";
import CartHeads from "../features/carts/CartHeads";
import CartsCards from "../features/carts/CartsCards";
import FinalBuys from "../features/carts/FinalBuys";
import Offferandcoupons from "../features/carts/Offferandcoupons";
import Summerry from "../features/carts/Summerry";
import RecommendedBox from "../features/shopping/RecommendedBox";
import Footer from "../ui/Footer";

/* MAIN WRAPPER */
const PageWrapper = styled.div`
  width: 100%;
  ${'' /* background: #b8b8b8; */}
  padding-bottom: 3rem;
`;

/* CART AREA */
const CartArea = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 2rem auto;

  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 2rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

/* LEFT SIDE - CART ITEMS */
const CartItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

/* RIGHT SIDE - SUMMARY */
const SummaryBox = styled.div`
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 950px) {
    position: static;
  }
`;

function CartPage() {
  return (
    <PageWrapper>
      <CartHeads />

      <CartArea>
        {/* CART ITEMS LIST */}
        <CartItemsBox>
          {Array.from({ length: 4 }).map((_, i) => (
            <CartsCards key={i} />
          ))}
        </CartItemsBox>

        {/* SUMMARY SECTION */}
        <SummaryBox>
          <Offferandcoupons />
          <Summerry />
          <FinalBuys />
        </SummaryBox>
      </CartArea>

      <RecommendedBox />

      {/* <Footer /> */}
    </PageWrapper>
  );
}

export default CartPage;
