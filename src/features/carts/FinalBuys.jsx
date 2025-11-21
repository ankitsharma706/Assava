import styled from "styled-components";
import { Link } from "react-router-dom";

/* WRAPPER */
const FinalBuy = styled.div`
  width: 100%;
  max-width: 600px;
  background: #1a33d5ff;
  border-radius: 12px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: white;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin: 1rem auto;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    padding: 1.2rem;
  }
`;

/* INDIVIDUAL PRICE ITEMS */
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 1;
`;

const NewPrice = styled.div`
  font-weight: bold;
  font-size: clamp(1.4rem, 3vw, 2rem);
`;

const OldPrice = styled.div`
  text-decoration: line-through;
  color: #eeeeeea9;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
`;

const Discount = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-weight: bold;
  color: #ff0000;
`;

/* BUTTON */
const PlaceOrderBtn = styled(Link)`
  flex: 1;
  padding: 0.8rem 1rem;
  background: white;
  color: #1bcaff;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  font-size: clamp(1rem, 2.3vw, 1.3rem);
  border: none;
  text-decoration: none;
  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    background: #dff9ff;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

function FinalBuys() {
  return (
    <FinalBuy>
      <PriceBox>
        <NewPrice>₹860</NewPrice>
      </PriceBox>

      <PriceBox>
        <OldPrice>₹1500</OldPrice>
      </PriceBox>

      <PriceBox>
        <Discount>43% OFF</Discount>
      </PriceBox>

      <PlaceOrderBtn to="/thankyou">Place Order</PlaceOrderBtn>
    </FinalBuy>
  );
}

export default FinalBuys;
