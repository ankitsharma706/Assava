import styled from "styled-components";

/* WRAPPER */
const AddToCartBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: #1884ff;
  padding: 0.6rem 1rem;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  color: white;
`;

/* PRICE (Main Price) */
const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

/* OLD PRICE (Strike-through) */
const Discount = styled.div`
  color: #ffdddd;
  font-size: 1rem;
  text-decoration: line-through;
`;

/* ADD BUTTON */
const AddButton = styled.button`
  margin-left: auto;
  padding: 0.4rem 0.8rem;

  background: white;
  color: #1884ff;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  font-size: 0.95rem;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

function AddToCart() {
  return (
    <AddToCartBox>
      <Price>₹799</Price>
      <Discount>₹1499</Discount>
      <AddButton>Add to Cart</AddButton>
    </AddToCartBox>
  );
}

export default AddToCart;
