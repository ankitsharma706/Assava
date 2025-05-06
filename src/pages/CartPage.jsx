import styled from "styled-components";
import CartHeads from "../features/carts/CartHeads";
import CartsCards from "../features/carts/CartsCards";
import FinalBuys from "../features/carts/FinalBuys";
import Offferandcoupons from "../features/carts/Offferandcoupons";
import Summerry from "../features/carts/Summerry";
import RecommendedBox from "../features/shopping/RecommendedBox";
import Col from "../ui/Col";
import Footer from "../ui/Footer";
const CartBox = styled.div`
  height: auto;
  width: 100%;
  background-color: #b8b8b8;
  border-radius: 7px;
  display: flex;
  justify-content: space-around;
`;

function CartPage() {
  return (
    <>
      <CartHeads />

      <CartBox>
        <Col>
          <CartsCards />
          <CartsCards />
          <CartsCards />
          <CartsCards />
        </Col>
        <Col>
          <Offferandcoupons />
          <Summerry />
          <FinalBuys />
        </Col>
      </CartBox>
      <RecommendedBox />

      {/* <Footer /> */}
    </>
  );
}

export default CartPage;
