import styled from "styled-components";

/* MAIN WRAPPER */
const SummaryCard = styled.div`
  width: 100%;
  max-width: 500px;
  ${'' /* background: #646464; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 12px;
  padding: 1.5rem;

  color: white;
  margin: 1.5rem auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 1rem;
    gap: 0.8rem;
  }
`;

/* TITLE */
const Title = styled.h2`
  font-size: clamp(1.7rem, 4vw, 2.5rem);
  text-align: center;
  color: white;
  margin: 0 0 0.5rem;
`;

/* ROW */
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: clamp(1rem, 3vw, 1.3rem);

  padding: 0.3rem 0;
`;

/* HIGHLIGHTED FINAL TOTAL */
const FinalRow = styled(Row)`
  font-size: clamp(1.2rem, 3.5vw, 1.6rem);
  font-weight: bold;
  margin-top: 0.5rem;
`;

/* HR LINE */
const Line = styled.hr`
  border: none;
  height: 2px;
  background: #ffffffaa;
  border-radius: 10px;
`;

/* PRICE */
const Price = styled.span`
  font-weight: 500;
`;

function Summerry() {
  return (
    <SummaryCard>
      <Title>Order Summary</Title>

      <Row>
        <span>Total Items</span>
        <Price>₹1500</Price>
      </Row>

      <Row>
        <span>Discount</span>
        <Price>- ₹500</Price>
      </Row>

      <Row>
        <span>Sub Total</span>
        <Price>₹1000</Price>
      </Row>

      <Line />

      <Row>
        <span>Coupon Applied</span>
        <Price>- ₹202</Price>
      </Row>

      <Row>
        <span>Delivery</span>
        <Price>₹49</Price>
      </Row>

      <Row>
        <span>Packing</span>
        <Price>₹9</Price>
      </Row>

      <FinalRow>
        <span>Final Total</span>
        <Price>₹840</Price>
      </FinalRow>
    </SummaryCard>
  );
}

export default Summerry;
