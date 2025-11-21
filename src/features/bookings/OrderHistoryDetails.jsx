import styled from "styled-components";
import { Link } from "react-router-dom";

/* MAIN WRAPPER */
const OrderCard = styled.div`
  width: 100%;
  ${'' /* background: #5a5b5c; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 12px;
  padding: 1.2rem 1.5rem;
  margin: 1rem 0;

  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 1rem;

  color: white;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* LEFT SIDE CONTENT */
const OrderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

/* ROW TEXT */
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
`;

/* STATUS BADGE */
const StatusBadge = styled.div`
  display: inline-block;
  background: #1bc47d;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  width:10rem;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: bold;
  color: #ffffff;
  margin-top: 0.4rem;
`;

/* RIGHT SIDE ACTIONS */
const OrderRight = styled.div`
  ${'' /* background: #808181; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 10px;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

/* ACTION BUTTON */
const ActionButton = styled(Link)`
  ${'' /* background: #9a9a9a; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  color: white;
  text-decoration: none;

  text-align: center;
  padding: 0.7rem 1rem;
  border-radius: 8px;

  font-size: clamp(1rem, 2vw, 1.1rem);
  font-weight: bold;

  transition: 0.2s ease-in-out;

  &:hover {
    ${'' /* background: #b3b3b3; */}opacity:0.7;
  }
`;

function OrderHistoryDetails() {
  return (
    <OrderCard>

      {/* LEFT SIDE */}
      <OrderLeft>
        <Row>
          <div>Placed on: Jan 28, 2025</div>
          <div>Prepaid</div>
        </Row>

        <Row>
          <div>Order ID: #043256324</div>
          <div>₹679.20</div>
        </Row>

        <StatusBadge>Complete</StatusBadge>
      </OrderLeft>

      {/* RIGHT SIDE */}
      <OrderRight>
        <ActionButton to="/tracking">Track Order</ActionButton>
        <ActionButton to="/coffeeDetail">Order Details</ActionButton>
      </OrderRight>

    </OrderCard>
  );
}

export default OrderHistoryDetails;
