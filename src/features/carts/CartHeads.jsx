import { Link } from "react-router-dom";
import styled from "styled-components";
import Address from "../../hooks/Address";

/* TOP CHECKOUT HEADER */
const CartHead = styled.div`
  width: 100%;
  ${'' /* background: #8b8b8b; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

/* LEFT SIDE: BACK BUTTON + TITLE */
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
`;

/* BACK BUTTON */
const BackButton = styled(Link)`
  padding: 0.6rem 1rem;
  ${'' /* background: #606060; */}
  
  color: white;
  border-radius: 8px;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #4b4b4b;
  }
`;

/* ADDRESS SECTION */
const AddressBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

function CartHeads() {
  return (
    <CartHead>
      <LeftSection>
        <BackButton to="/shopping">←</BackButton>
        <span>Checkout</span>
      </LeftSection>

      <AddressBox>
        <Address />
      </AddressBox>
    </CartHead>
  );
}

export default CartHeads;
