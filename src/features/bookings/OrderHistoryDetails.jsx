import styled from "styled-components";

const OrderHistDetBox = styled.div`
  height: 230px;
  background: #5a5b5c;
  border-radius: 10px;
  margin: 10px 0;
  width: 100%;

  display: flex;
`;
const Box1 = styled.div`
  height: 229px;
  /* background: #bea32d; */
  width: 80%;
`;
const OrdPlacDateType = styled.div`
  height: 33%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 52px;
  /* background: #a05959; */
`;
const OrdPlacDate = styled.div`
  padding-left: 5%;
`;
const OrdPlacType = styled.div`
  padding-right: 5%;
`;
const OrdIDPrice = styled.div`
  height: 33%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 52px;
  /* background: #ff2a2a; */
`;
const OrdID = styled.div`
  padding-left: 5%;
`;
const Price = styled.div`
  padding-right: 5%;
`;
const Box2 = styled.div`
  height: 229px;
  background: #808181;
  width: 20%;
  text-align: center;
  border-radius: 0 7px 7px 0;
  & a{
    text-decoration: none;
  }
`;
const OrdDetails = styled.button`
  margin-top: 20px;
  margin-bottom: 30px;
  height: 70px;
  text-align: center;
  background: #ff9595;
  display: flex;
  cursor: pointer;
  border: none;
  justify-content: space-between;
  width: 95%;
  padding-left: 5%;
  color: aliceblue;
  font-size: 52px;
  background: none;
`;
const OrdStatus = styled.div`
  height: 33%;
  display: flex;
  padding-left: 5%;
  justify-content: space-between;
  width: 95%;
  font-size: 52px;
  /* background: #3946ff; */
`;
function OrderHistoryDetails() {
  return (
    <OrderHistDetBox>
      <Box1>
        <OrdPlacDateType>
          <OrdPlacDate>Placed on Date</OrdPlacDate>
          <OrdPlacType>Prepaid</OrdPlacType>
        </OrdPlacDateType>
        <OrdIDPrice>
          <OrdID>Order Id: # 043256324</OrdID>
          <Price>679.20</Price>
        </OrdIDPrice>
        <OrdStatus>Complete</OrdStatus>
      </Box1>
      <Box2>
        <a href="/tracking">
          <OrdDetails>Track Order</OrdDetails>
        </a>
        <a href="coffeeDetail">
          <OrdDetails>Order Details</OrdDetails>
        </a>
      </Box2>
    </OrderHistDetBox>
  );
}

export default OrderHistoryDetails;
