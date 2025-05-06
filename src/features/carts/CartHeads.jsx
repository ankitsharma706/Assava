import styled from "styled-components";
import Address from "../../hooks/Address";

const CheckOutName = styled.div`
  height: 100px;
  width: 50%;

  border-radius: 7px;
  font-size: 30px;
  padding-left: 150px;
  padding-top: 40px;
  color: aliceblue;
`;
const CheckOutButton = styled.button`
  /* height: 100px;
  width: 50%;*/
  cursor: pointer;
  background: none;

  border-radius: 7px;
  font-size: 30px;
  border: none;
  padding-left: 15px;
  padding-right: 15px;
  /* padding-top: 40px; */
  color: aliceblue;
`;

const CartHead = styled.div`
  background: #8b8b8b;
  display: flex;
`;
function CartHeads() {
  return (
    <CartHead>
      <CheckOutName>
        <a href="/shopping">
          <CheckOutButton> ← </CheckOutButton>
        </a>
        CheckOut
      </CheckOutName>
      <Address />
    </CartHead>
  );
}

export default CartHeads;
