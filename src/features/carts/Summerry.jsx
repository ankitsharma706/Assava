import styled from "styled-components";

const Box1 = styled.div`
  width: 100%;
  height: 12%;
  /* background: #646464; */
  /* font-size: 25px; */
  color: aliceblue;
  text-align: center;
  border-radius: 10px;
  display: flex;
`;
const Name = styled.div`
  width: 70%;
  height: 100%;
  /* background: #922626; */
  font-size: 35px;
  margin-left: 8px;
  color: aliceblue;
  text-align: left;
  border-radius: 10px;
`;
const Price = styled.div`
  width: 30%;
  height: 100%;
  /* background: #6318c5; */
  font-size: 35px;
  color: aliceblue;
  text-align: left;
  border-radius: 10px;
`;
const SummeryName = styled.div`
  width: 100%;
  height: 14%;
  /* background: #a12c2c; */
  border-radius: 15px;
  color: aliceblue;
  font-size: 55px;
  text-align: center;
  /* margin-bottom: 4px; */
`;
const Summerary = styled.div`
  margin-left: 2px;
  height: 500px;
  width: 500px;
  background-color: #646464;
  border-radius: 7px;
  & hr {
    height: 3px;
    background: #ffffff;
    border-radius: 4px;
  }
`;
function Summerry() {
  return (
    <Summerary>
            <SummeryName>Order Summery</SummeryName>
            <Box1>
              <Name>Total Item</Name>
              <Price>₹1500</Price>
            </Box1>
            <Box1>
              <Name>Discount</Name>
              <Price>₹500</Price>
            </Box1>
            <Box1>
              <Name>Sub Total</Name>
              <Price>₹1000</Price>
            </Box1>
            <hr />
            <Box1>
              <Name>Coupon code</Name>
              <Price>₹200</Price>
            </Box1>
            <Box1>
              <Name>Delivery</Name>
              <Price>₹50</Price>
            </Box1>
            <Box1>
              <Name>packing</Name>
              <Price>₹10</Price>
            </Box1>
            <Box1>
              <Name>Sub Total</Name>
              <Price>₹860</Price>
            </Box1>
          </Summerary>
  )
}

export default Summerry
