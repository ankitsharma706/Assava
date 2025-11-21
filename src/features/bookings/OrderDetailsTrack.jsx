import styled from "styled-components";
import StatusTrack from "./StatusTrack";

/* PAGE WRAPPER */
const Wrapper = styled.div`
  width: 100%;
  ${'' /* background: #9b9b9b; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
border-radius:1rem;
  padding: 2rem 1rem;

  display: flex;
  justify-content: center;
`;

/* 2-COLUMN LAYOUT */
const Layout = styled.div`
  width: 100%;
  max-width: 1200px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* LEFT ORDER DETAILS */
const OrderBox = styled.div`
  ${'' /* background: #a3a3a3; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1.4rem;
  border-radius: 12px;
  color: white;
`;

const Heading = styled.div`
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

const Status = styled.div`
  background: #4caf50;
  color: white;
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.2rem;

  font-size: clamp(1rem, 2vw, 1.2rem);
`;

const ProductSummary = styled.div`
  ${'' /* background: #8a8a8a; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1rem;
  border-radius: 8px;
  font-size: clamp(1rem, 2vw, 1.2rem);
`;

/* RIGHT SIDE - TRACKING */
const TrackingBox = styled.div`
  ${'' /* background: #929292; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1.4rem;
  border-radius: 12px;
  color: white;
`;

const TrackHeading = styled.div`
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const TrackStatusLine = styled.div`
  background: #4caf50;
  color: white;
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 8px;

  margin-bottom: 1.2rem;
  font-size: clamp(1rem, 2vw, 1.2rem);
`;

/* TRACKING LIST */
const TrackingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function OrderDetailsTrack() {
  return (
    <Wrapper>
      <Layout>

        {/* LEFT ORDER DETAILS */}
        <OrderBox>
          <Heading>Order Details: #87587646</Heading>
          <Status>Completed</Status>

          <ProductSummary>
            Coffee Beans (2x) <br />
            Premium Arabica Roast <br />
            Total: ₹679.20
          </ProductSummary>
        </OrderBox>

        {/* RIGHT TRACKING */}
        <TrackingBox>
          <TrackHeading>Track Your Order: #87587646</TrackHeading>
          <TrackStatusLine>Status: Completed</TrackStatusLine>

          <TrackingList>
            <StatusTrack />
            <StatusTrack />
          </TrackingList>
        </TrackingBox>

      </Layout>
    </Wrapper>
  );
}

export default OrderDetailsTrack;
