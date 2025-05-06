import styled from "styled-components";
import FilterBoxs from "../features/shopping/FilterBoxs";
import ShoppingCard from "../features/shopping/ShoppingCard";
import ShopTypes from "../features/shopping/ShopTypes";
import Footer from "../ui/Footer";

const ShoppingLayout = styled.div`
  height: auto;
  width: 100%;
  /* display: flex; */
  background: #8f8f8f;
`;

const ShopBox = styled.div`
  height: auto;
  width: 1700px;
  /* background: #54ff20; */
  display: flex;
  /* column-count: 4; */
  justify-content: space-around;
  /* gap: 16px; */
  /* grid-template-columns: repeat(3, 1fr); */
  padding-top: 30px;
  padding-bottom: 50px;
`;
const Rows = styled.div`
  display: flex;
`;
const Cols = styled.div`
  display: flex;
  flex-direction: column;
`;

function Shopping() {
  return (
    <ShoppingLayout>
      <FilterBoxs />
      <Rows>
        <ShopTypes />
        <Cols>
          <ShopBox>
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
          </ShopBox>
          <ShopBox>
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
          </ShopBox>
          <ShopBox>
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
            <ShoppingCard />
          </ShopBox>
        </Cols>
      </Rows>
      {/* <Footer /> */}
    </ShoppingLayout>
  );
}

export default Shopping;
