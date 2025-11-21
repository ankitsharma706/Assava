import styled from "styled-components";
import ShippingSummerry from "./ShippingSummerry";
import TrackTitleTag from "./TrackTitleTag";
import TransitionBoxs from "./TransitionBoxs";
import OrderDetailsTrack from "./OrderDetailsTrack";

/* PAGE WRAPPER */
const PageWrapper = styled.div`
  width: 100%;
  ${'' /* background: #801e1e; */}
  color: white;

  min-height: 100vh;
  padding: 2rem 1rem;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
`;

/* CENTERED CONTAINER */
const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 700px) {
    gap: 1.5rem;
  }
`;

function TrackingDetails() {
  return (
    <PageWrapper>
      <Container>
        <TrackTitleTag />

        <TransitionBoxs />

        <OrderDetailsTrack />

        <ShippingSummerry />
      </Container>
    </PageWrapper>
  );
}

export default TrackingDetails;
