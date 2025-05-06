import styled from "styled-components";
import ShoppingCard from "../shopping/ShoppingCard";

const BestProduct = styled.div`
  height: 850px;
  width: 100%;
  background: #9b9a9a;
`;
const TopProduct = styled.div`
  height: 800px;
  width: 100%;
  background: #9b9a9a;
`;
const Product = styled.div`
  height: 650px;
  width: 90%;
  margin: 40px;
  margin-left: 90px;
  justify-content: space-around;
  /* background: #ff8c08; */
  display: flex;
`;
const Name = styled.div`
  background: #9b9a9a;
  height: 70px;
  width: 100%;
  font-size: 75px;
  text-align: center;
  padding-top: 50px;
  color: aliceblue;
`;
function HomeProducts() {
  return (
    <>
      <TopProduct>
        <Name>Our Top products</Name>
        <Product>
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
        </Product>
      </TopProduct>

      <BestProduct>
        <Name>Our Best products</Name>
        <Product>
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
        </Product>
      </BestProduct>
    </>
  );
}

export default HomeProducts;
