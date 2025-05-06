import styled from "styled-components";
import OrderHistoryDetails from "./OrderHistoryDetails";

const OrderHistorys = styled.div`
  height: 100%;
  width: 100%;
  /* background: #ff1515; */
  color: aliceblue;
`;
const OrderedNameBox = styled.div`
  width: 100%;
  height: 200px;
  background: #cfc3aa;
  font-size: 75px;
  align-self: center;
  align-content: center;
  `;
const OrderedName = styled.div`
  margin-left: 150px;
  `;
const OrderHist = styled.div`
  height: 100%;
  width: 84%;
  /* background: #f1814d; */
  padding: 5% 8%;
  `;
const OrderHistName = styled.div`
border-radius: 10px;
padding-left: 28px;
  height: 80px;
  width: 100%;
  background: #818181;
  font-size: 65px;
`;

const TrackTitleTagNavigation = styled.button`
  cursor: pointer;
  font-size: 75px;
  border: none;
  background: none;
  color: aliceblue;
`;

// const Box2=styled.div``
function OrderHistory() {
  return (
    <OrderHistorys>
      <OrderedNameBox>
        <OrderedName>
        <a href="/shopping">
          <TrackTitleTagNavigation>←</TrackTitleTagNavigation>
        </a>
          Hey Ankit Sharma,
        </OrderedName>
      </OrderedNameBox>
      <OrderHist>
        <OrderHistName>Order History</OrderHistName>
        <OrderHistoryDetails/>
        <OrderHistoryDetails/>
        <OrderHistoryDetails/>
        <OrderHistoryDetails/>
      </OrderHist>
    </OrderHistorys>
  );
}

export default OrderHistory;
