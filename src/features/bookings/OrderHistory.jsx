import styled from "styled-components";
import { Link } from "react-router-dom";
import OrderHistoryDetails from "./OrderHistoryDetails";

/* PAGE WRAPPER */
const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  ${'' /* background: #dfd6c2; */}
  color: white;
`;

/* HEADER BAR */
const HeaderBar = styled.div`
  width: 100%;
  ${'' /* background: #cfc3aa; */}

  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: clamp(1.8rem, 4vw, 3rem);
  ${'' /* color: #333; */}
`;

/* BACK BUTTON */
const BackButton = styled(Link)`
  font-size: clamp(2rem, 5vw, 3rem);
  ${'' /* color: #333; */}
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

/* NAME TEXT */
const Greeting = styled.div`
  font-weight: bold;
`;

/* INNER CONTENT WRAPPER */
const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2.5rem auto;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

/* TITLE BOX */
const ListTitle = styled.div`
  ${'' /* background: #818181; */} background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1rem;
  border-radius: 10px;

  font-size: clamp(1.5rem, 4vw, 2.3rem);
  font-weight: bold;
`;

function OrderHistory() {
  return (
    <PageWrapper>

      {/* TOP HEADER */}
      <HeaderBar>
        <BackButton to="/shopping">←</BackButton>
        <Greeting>Hey Ankit Sharma,</Greeting>
      </HeaderBar>

      {/* CONTENT */}
      <Content>
        <ListTitle>Order History</ListTitle>

        {/* REPEATED ORDERS */}
        <OrderHistoryDetails />
        <OrderHistoryDetails />
        <OrderHistoryDetails />
        <OrderHistoryDetails />
      </Content>

    </PageWrapper>
  );
}

export default OrderHistory;
