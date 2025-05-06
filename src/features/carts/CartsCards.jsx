import styled from "styled-components";

const Boxs = styled.div`
  display: block;
  margin-top: 10px;
`;
const CartCards = styled.div`
  width: 1200px;
  padding: 4px;
  align-items: left;
  justify-content: left;
  margin-left: 50px;
`;

const Box = styled.div`
  display: flex;
  margin-top: 6px;
  height: 170px;
  width: 100%;
  background-color: #575252;
  border-radius: 9px;
`;

const ImageBox = styled.div`
  height: 150px;
  width: 20%;
  margin-left: 50px;
  padding: 10px;
  /* top: -100px; */
  /* background-color: beige; */
`;
const RatingShareBox = styled.div`
  height: 40px;
  width: 900px;
  display: flex;
  /* background-color: #3134f1; */
  margin-left:30px;
  justify-content:space-between;
`;
const QuantityPriceBox = styled.div`
  height: 40px;
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  /* background-color: #f80000; */
`;
const Rating = styled.div`
  height: 40px;
  width: 30%;
  font-size: 25px;
  text-align: center;
  color: aliceblue;
  display: flex;
  /* background-color: beige; */
`;
const Name = styled.div`
  height: 40px;
  width: 900px;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 10px;
  color: aliceblue;
  font-size: 40px;
  /* background-color: #18db49; */
`;
const Share = styled.div`
  height: 40px;
  width: 20%;
  color: cadetblue;
  font-size: 30px;
  text-align: center;
  rotate: 90deg;
  /* background-color: beige; */
`;
const Quantity = styled.div`
  height: 40px;
  width: 200px;
  font-size: 30px;
  text-align: center;
  display: flex;
  color: aliceblue;
  
  align-items: center;
  justify-content: center;
  gap: 10px; 
`;
const PriceBox = styled.div`
  height: 55px;
  width: 30%;
  font-size: 30px;
  text-align: center;
  display: flex;
  /* background-color: beige; */
`;
const Price = styled.div`
  height: 20%;
  width: 20%;
  font-size: 30px;
  text-align: center;
  color: aliceblue;
  /* background-color: beige; */
`;
const Discount = styled.div`
  height: 20%;
  padding-left: 15px;
  width: 20%;
  font-size: 20px;
  text-align: center;
  text-decoration: line-through;
  
  color: #f7d5d5;
`;
const DiscountPerBox = styled.div`
  height: 40px;
  padding-left: 15px;
  width: 60px;
  font-size: 25px;
  margin-left: 10px;
  margin-top: 1px;
  margin-right: 10px;
  text-align: center;

  
  color: #ff0000;
`;
const Button = styled.button`
  background-color: aliceblue;
  height: 40px;
  width: 40px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 26px;
`;
const Count = styled.span`
  font-size: 26px;
  font-weight: bold;
`;
function CartsCards() {
  return (
    <CartCards>
          <Box>
            <ImageBox>
              <img src="/cup.jpg" alt="cup" height={160} width={250} />
            </ImageBox>
            <Boxs>
              <Name>COFFEE-0221</Name>
              <RatingShareBox>
                <Rating>⭐⭐⭐⭐⭐ 4.2</Rating>
                <Share>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#e3ece5"
                  >
                    <path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" />
                  </svg>
                </Share>
              </RatingShareBox>
              <QuantityPriceBox>
                <Quantity>
                  <Quantity>
                    <Button>-</Button>
                    <Count>2</Count>
                    <Button>+</Button>
                  </Quantity>
                </Quantity>
                <PriceBox>
                  <DiscountPerBox>-30%</DiscountPerBox>
                  <Price>₹799</Price>
                  <Discount>₹1499</Discount>
                </PriceBox>
              </QuantityPriceBox>
            </Boxs>
          </Box>

        
        </CartCards>
  )
}

export default CartsCards
