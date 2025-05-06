import { AiOutlineStop } from "react-icons/ai";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";
import styled from "styled-components";

const CoffeeDetailsFullBox = styled.div`
  height: 1200px;
  width: 50%;
  background: #5c5c5c;
`;
const CofTitile = styled.div`
  height: 100px;
  /* background: #000; */
  width: 90%;
  margin-left: 30px;
  margin-top: 30px;
  font-size: 56px;
`;
const CofRating = styled.div`
  height: 60px;
  /* background: #fcc11e; */
  width: 90%;
  margin-left: 30px;
  margin-top: 10px;
  font-size: 36px;
`;
const GrindBeans = styled.div`
  height: 60px;
  /* background: #a3e609; */
  width: 90%;
  margin-left: 30px;
  margin-top: 10px;
  font-size: 36px;
`;
const FlavTypes = styled.div`
  height: 90px;
  /* background: #4eeaff; */
  width: 90%;
  margin-left: 30px;
  margin-top: 10px;
  font-size: 30px;
  display: grid;
  & span {
  }
`;
const CofDet = styled.div`
  height: 200px;
  /* background: #e60939; */
  width: 88%;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 40px;
  padding: 10px;
  font-size: 24px;
`;
const CofInfoBox = styled.div`
  height: 200px;
  /* background: #1f93ff; */
  width: 90%;
  margin-left: 30px;
  margin-top: 10px;
  font-size: 36px;
`;
const CofInfolines = styled.div`
  height: 33%;
  /* background: #a7eb79; */
  width: 90%;
  display: flex;
  margin-top: 2px;
  /* margin-top: 40px; */
  font-size: 24px;
  justify-content: space-between;
  & span {
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
  }
`;
const CofQtyBox = styled.div`
  height: 60px;
  margin-left: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 40px;
  display: flex;
`;
const CofQty = styled.div`
  height: 60px;
  background: #9e9797;
  width: 200px;
  margin-left: 30px;
  border-radius: 10px;
  /* margin-top: 40px; */
  margin-bottom: 40px;
  font-size: 36px;
  justify-content: space-around;
  & span {
    margin-left: 25px;
    margin-right: 25px;
  }
`;
const CofQtyBut = styled.button`
  height: 60px;
  /* background: #4aff32; */
  border: none;
  width: 65px;
  color: aliceblue;
  background: none;
  /* margin-left: 30px;
  margin-top: 40px; 
  margin-bottom: 40px;*/
  font-size: 38px;
  cursor: pointer;
`;
const Price = styled.div`
  color: aliceblue;
  /* font-size: 30px; */
`;
const Discount = styled.div`
  color: #b1b1b1;
  font-size: 30px;
  text-decoration: line-through;
`;
const CartAdd = styled.button`
  left: 100px;
  text-align: right;
  font-size: 40px;
  height: 60px;
  width: 285px;
  /* background: #000; */
  color: aliceblue;
  /* padding-top: 8px; */
  background: none;
  border: none;
  cursor: pointer;
`;

const AddToCarts = styled.div`
  padding: 30px;
  /* padding-right: 40px; */
  margin-left: 35px;
  display: flex;
  height: 50px;
  width: 400px;
  font-size: 40px;
  border-radius: 12px;
  background-color: #1884ff;
  justify-content: flex-start;
`;
function CofInfo() {
  return (
    <CoffeeDetailsFullBox>
    <CofTitile>Durga Madhaba</CofTitile>
    <CofRating>Rating ⭐⭐⭐⭐⭐4.2</CofRating>
    <GrindBeans>Grind/beans</GrindBeans>
    <FlavTypes>
      Flavour Note
      <span>Caramel chocolate & Hint of citrus</span>
    </FlavTypes>
    <CofDet>
      Coffee is a popular brewed beverage made from roasted coffee beans,
      which are the seeds of the Coffea plant. It is known for its rich
      flavor and stimulating effects due to caffeine. There are two main
      species used in production: Arabica (milder, more flavorful) and
      Robusta (stronger, more bitter, higher caffeine). Coffee is typically
      grown in tropical climates and is enjoyed worldwide in various forms
      like espresso, latte, cappuccino, and cold brew.
    </CofDet>
    <CofInfoBox>
      <CofInfolines>
        <span>
          {" "}
          <GiCoffeeBeans /> 100% Arabica
        </span>
        <span>
          <SiCoffeescript /> 20 Cups Of Coffee
        </span>
      </CofInfolines>
      <CofInfolines>
        <span>
          <AiOutlineStop /> No Preservation
        </span>
        <span>
          <FaHandsHoldingCircle /> Hand proccesed
        </span>
      </CofInfolines>
      <CofInfolines>
        <span>
          <SlLocationPin /> Collected from Chandragiri
        </span>
      </CofInfolines>
    </CofInfoBox>
    <CofQtyBox>
      Quantity
      <CofQty>
        <CofQtyBut>-</CofQtyBut>
        <span>2</span>
        <CofQtyBut>+</CofQtyBut>
      </CofQty>
    </CofQtyBox>
    <AddToCarts>
      <Price>₹799</Price>
      <Discount>₹1499</Discount>

      <CartAdd>Add to Cart</CartAdd>
    </AddToCarts>
  </CoffeeDetailsFullBox>
  )
}

export default CofInfo
