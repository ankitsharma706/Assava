import { useState } from "react";
import styled from "styled-components";

/* MAIN CART WRAPPER */
const CartWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  ${'' /* background: #575252; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  gap: 1.2rem;
  margin: 1rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

/* IMAGE BOX */
const ImageBox = styled.div`
  width: 180px;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

/* CONTENT SECTION */
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

/* TITLE */
const Title = styled.h3`
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  margin: 0;
  color: white;
`;

/* RATING & SHARE ROW */
const RatingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d7eaff;
  font-size: clamp(1rem, 1.5vw, 1.2rem);
`;

/* SHARE BUTTON */
const Share = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    fill: #d7eaff;
  }
`;

/* BOTTOM ROW: QTY + PRICE */
const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.6rem;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

/* QUANTITY CONTROLS */
const QtyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  button {
    background: white;
    color: black;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  }

  span {
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
  }
`;

/* PRICE BOX */
const PriceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const DiscountBadge = styled.div`
  background: #ff2f2f;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
`;

const OldPrice = styled.div`
  text-decoration: line-through;
  font-size: 1rem;
  color: #e5caca;
`;

function CartsCards() {
  const [count, setCount] = useState(1);
    function increment() { setCount(p => p + 1) }
    function decrement() { setCount(p => (p > 1 ? p - 1 : 1)) }
  return (
    <CartWrapper>
      <ImageBox>
        <img src="/cup.jpg" alt="cup" />
      </ImageBox>

      <Content>
        <Title>COFFEE-0221</Title>

        <RatingRow>
          <span>⭐⭐⭐⭐⭐ 4.2</span>

          <Share>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M240-40q-33 0-56.5-23.5T160-120v-440q0-33 23.5-56.5T240-640h120v80H240v440h480v-440H600v-80h120q33 0 56.5 23.5T800-560v440q0 33-23.5 56.5T720-40H240Zm200-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z" />
            </svg>
          </Share>
        </RatingRow>

        <BottomRow>
          {/* QUANTITY */}
          <QtyBox>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
          </QtyBox>

          {/* PRICE */}
          <PriceBox>
            <DiscountBadge>-30%</DiscountBadge>
            <Price>₹799</Price>
            <OldPrice>₹1499</OldPrice>
          </PriceBox>
        </BottomRow>
      </Content>
    </CartWrapper>
  );
}

export default CartsCards;
