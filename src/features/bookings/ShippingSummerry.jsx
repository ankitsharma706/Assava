import styled from "styled-components";
import Summerry from "../carts/Summerry";

const ShipingSummerry = styled.div`
  height: 500px;
  width: 100%;
  background: #22e64d;
  display: flex;
  justify-content: space-around;
`;
const ShippingDetils = styled.div`
  height: 400px;
  width: 40%;
  margin-top: 50px;
  background: #20aa9f;
`;
const ShippingTitle = styled.div`
  height: 60px;
  margin-top: 10px;
  font-size: 43px;
  background: #000;

  padding-left: 30px;

  width: 96%;
`;
const Addresses = styled.div`
  height: 300px;
  margin-top: 10px;
  font-size: 38px;
  padding: 23px;
  padding-bottom: 5px;
  background: #000;
  width: 95%;
`;
const AddressesAdd = styled.div`

`;
const AddressesName = styled.div`

`;
const AddressesPhoneGmail = styled.div`
 
`;
function ShippingSummerry() {
  return (
    <ShipingSummerry>
    <ShippingDetils>
      <ShippingTitle>Shipping Details</ShippingTitle>
      <Addresses>
        <h3> Deliver to </h3>
        <AddressesName>Ankit Sharma</AddressesName>
        <AddressesAdd>
          
          247/2-3 Maniratnam road no 06 adityapur-2, Jamshedpur, Jharkhand,
          IN. 831013
        </AddressesAdd>
        <AddressesPhoneGmail>
          9341809141 <br />
          ankit@gmail.com
        </AddressesPhoneGmail>
      </Addresses>
    </ShippingDetils>
    <Summerry />
  </ShipingSummerry>
  )
}

export default ShippingSummerry
