import styled from "styled-components";


const Offersandcoupan = styled.div`
  margin-left: 2px;
  height: 150px;
  width: 500px;
  /* background-color: aquamarine; */
  border-radius: 7px;
`;
const Offer = styled.div`
  width: 100%;
  height: 50%;
  background: #646464;
  font-size: 50px;
  color: aliceblue;
  text-align: center;
  border-radius: 10px;
`;
const Coupon = styled.button`
  width: 100%;
  height: 50%;
  background: #757575;
  font-size: 50px;
  color: aliceblue;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;
function Offferandcoupons() {
  return (
    <Offersandcoupan>
    <Offer>Offers & Benefits</Offer>
    <Coupon>Apply coupon →</Coupon>
  </Offersandcoupan>
  )
}

export default Offferandcoupons
