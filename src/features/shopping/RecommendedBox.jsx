import styled from "styled-components";
import ShoppingCard from "./ShoppingCard";
const RecommendedProduct = styled.div`
  height: auto;
  width: 100%;
  align-items: center;
  align-content: center;
  align-self: center;

  justify-content: space-around;
  background: #b8b8b8;
  display: flex;
  /* margin: 30px; */
  margin-top: 20px;
  padding-top: 30px;
  padding-bottom: 40px;
`;
const RecommendedProductName = styled.div`
  height: 100px;
  width: 90%;
  color: aliceblue;
  font-size: 60px;
  padding-left: 10%;
  padding-top: 30px;
`;
function RecommendedBox() {
  return (
    <>
      <RecommendedProductName>
        Recommended Product For You
      </RecommendedProductName>
      
      <RecommendedProduct>
        <ShoppingCard />
        <ShoppingCard />
      </RecommendedProduct>
    </>
  );
}

export default RecommendedBox;
