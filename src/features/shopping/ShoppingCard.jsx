import styled from "styled-components";
import AddToCart from "./AddToCart";

const Cards = styled.div`
  background-color: #575252;
  height: 640px;
  width: 330px;
  border: 4px solid none;
  border-radius: 10px;
`;

const ImageBox = styled.div`
  height: 300px;
  width: 330px;
  border-radius: 22px 22px 0 0;
`;
const CoffeeType = styled.div`
  margin-left: 30px;
  height: 30px;
  width: 100px;
  background-color: #00c458;
  border-radius: 40px;
  text-align: center;
  font-size: 22px;
  padding: 5px;
  color: aliceblue;
`;
const CardButton = styled.div`
  background: #575252;

  width: 330px;
  height: 300px;
  position: relative;
  border-radius: 0 0 22px 22px;

  border-color: transparent;
`;
const Name = styled.div`
  color: aliceblue;
  font-weight: 200;
  font-size: 40px;
  text-transform: uppercase;
  margin-left: 15px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  /* background: #000; */
  color: aliceblue;
  font-size: 20px;
  height: 170px;
  width: 310px;
  margin: 0 10px 10px 10px;

  padding: 30px 0 0 0;
`;



function ShoppingCard() {
  return (
    <Cards>
     <a href="/coffeeDetail">
      <ImageBox>
        <img src="cup.jpg" alt="img" height={300} width={330} />
      </ImageBox>
     </a>
      <CoffeeType>Instant</CoffeeType>
      <CardButton>
        <Name>Coffee - 01</Name>
      <AddToCart/>
        <Description>
          Grab our new  instant coffee jars in Original & French
          Vanilla flavours and get a FREE Ground Coffee Mug!
          Vanilla flavours and get a FREE Ground Coffee Mug!
          Vanilla flavours and get a FREE Ground Coffee Mug!
        </Description>
      </CardButton>
    </Cards>
  );
}

export default ShoppingCard;
