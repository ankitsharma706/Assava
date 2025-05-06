import styled from "styled-components";
import ShippingSummerry from "./ShippingSummerry";
import TrackTitleTag from "./TrackTitleTag";
import TransitionBoxs from "./TransitionBoxs";
import OrderDetailsTrack from "./OrderDetailsTrack";

const TrackOrderBox = styled.div`
  height: auto;
  width: 100%;
  background: #801e1e;
  color: aliceblue;
`;



function TrackingDetails() {
  return (
    <TrackOrderBox>
      <TrackTitleTag />
      <TransitionBoxs />
      <OrderDetailsTrack/>
      <ShippingSummerry />
    </TrackOrderBox>
  );
}

export default TrackingDetails;
