import styled from "styled-components";

const Price = styled.div`
  color: aliceblue;
  font-size: 30px;
`;
const Discount = styled.div`
  color: red;
  font-size: 20px;
  text-decoration: line-through;
`;
const CartAdd = styled.button`
  left: 100px;
  text-align: right;
  font-size: large;
  height: 32px;
  width: 155px;
  color: aliceblue;
  padding-top: 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

const AddToCarts = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 15px;
  display: flex;
  height: 40px;
  width: 280px;
  border-radius: 7px;
  background-color: #1884ff;
  justify-content: flex-start;
`;
function AddToCart() {
  return (
    <AddToCarts>
    <Price>₹799</Price>
    <Discount>₹1499</Discount>

    <CartAdd>Add to Cart</CartAdd>
  </AddToCarts>
  )
}

export default AddToCart
