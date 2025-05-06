import styled from "styled-components";
import StatusTrack from "./StatusTrack";

const OrderDetailandTrack = styled.div`
  height: 500px;
  width: 100%;
  background: #6d22e6;
  display: flex;
  justify-content: space-around;
`;
const OrderDetails = styled.div`
  height: 400px;
  width: 40%;
  margin: 50px 0;
  background: #aa6e20;
`;
const OrderName = styled.div`
  height: 60px;
  margin-top: 10px;
  font-size: 43px;
  padding-left: 30px;
  background: #000;
  width: 96%;
`;
const OrderStatus = styled.div`
  height: 40px;
  margin-top: 10px;
  font-size: 30px;
  padding-left: 30px;
  background: #818181;
  color: #0aff16;
  width: 96%;
`;
const OrderProduct = styled.div`
  height: 220px;
  margin-top: 10px;
  font-size: 30px;
  padding-left: 30px;
  background: #818181;
  /* color: #0aff8d; */
  width: 96%;
`;
const TrackingBox = styled.div`
  height: 430px;
  width: 40%;
  margin: 50px 0 0 50px;
  background: #8e20aa;
`;
const TrackingBoxStatus = styled.div`
  height: 270px;
  width: 93%;
  margin: 20px 0 0 30px;
  background: #2167a0;
  display: flex;
`;
const TrackStatCirs = styled.div`
  height: 270px;
  width: 13%;
  /* margin: 20px 0 0 30px; */
  background: #a1a1a1;
`;
const TrackStatCir = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 30px;
  margin-top: 60px;
  margin-bottom: 110px;
  background: #21a056;
`;
const TracBoxStat = styled.div`
  height: 270px;
  width: 93%;
  /* margin: 20px 0 0 30px; */
  background: #a02167;
`;
const TrackDetailsName = styled.div`
  height: 60px;
  margin-top: 10px;
  font-size: 43px;
  background: #000;
  padding-left: 30px;

  width: 96%;
`;

function OrderDetailsTrack() {
  return (
    <OrderDetailandTrack>
      <OrderDetails>
        <OrderName>Order Details:# 87587646</OrderName>
        <OrderStatus>Your Order is Now Completed</OrderStatus>
        <OrderProduct>Cart</OrderProduct>
      </OrderDetails>
      <TrackingBox>
        <TrackDetailsName>Track Your Order: # 87587646 </TrackDetailsName>
        <OrderStatus>Status : Completed</OrderStatus>
        <TrackingBoxStatus>
          <TrackStatCirs>
            <TrackStatCir></TrackStatCir>
            <TrackStatCir></TrackStatCir>
          </TrackStatCirs>
          <TracBoxStat>
            <StatusTrack />
            <StatusTrack />
          </TracBoxStat>
        </TrackingBoxStatus>
      </TrackingBox>
    </OrderDetailandTrack>
  );
}

export default OrderDetailsTrack;
