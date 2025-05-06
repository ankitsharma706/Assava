import styled from "styled-components";

const FinalBuy = styled.div`
  margin-left: 2px;
  height: 60px;
  width: 500px;
  display: flex;
  background-color: #1bcaff;
  border-radius: 15px;
  color: aliceblue;
  font-size:43px;
`;
const FinalPrice = styled.div`
  margin-left: 2px;
  margin-top: 4px;
  height: 100%;
  width: 20%;
  /* background-color: #7f8cff; */
  /* border-radius: 7px; */
`;
const TotalPrice = styled.div`
  margin-left: 2px;
  height: 100%;
  width: 30%;
  margin-top: 4px;
  /* background-color: #c57fff; */
  /* border-radius: 7px; */
  text-decoration: line-through;
  color: #c2c2c2;
`;
const DiscountTotalPer = styled.div`
  margin-left: 2px;
  height: 100%;
  width: 20%;
  margin-top: 4px;
  /* background-color: #ffe87f; */
  /* border-radius: 7px; */
`;
const PlaceOrder = styled.button`
  margin-left: 2px;
  height: 100%;
  width: 30%;
  background-color: #1bcaff;
  border-radius:0 7px 7px 0;
  font-size:24px;
  border: none;
  color: aliceblue;
  cursor: pointer;
  /* border-top-left-radius: 2px; */
  border-left: 3px solid white;
`;

function FinalBuys() {
  return (
    <FinalBuy>
    <FinalPrice>₹860</FinalPrice>
    <TotalPrice>₹1500</TotalPrice>
    <DiscountTotalPer>43%</DiscountTotalPer>
   <a href="/thankyou">
    <PlaceOrder>Place order</PlaceOrder>
   </a>
  </FinalBuy>
  )
}

export default FinalBuys
