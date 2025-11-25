import { useState } from "react";
import { AiOutlineStop } from "react-icons/ai";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { GiCoffeeBeans } from "react-icons/gi";
import { SiCoffeescript } from "react-icons/si";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* MAIN BOX */
const Wrapper = styled.div`
  flex: 1;
  ${'' /* background: #5c5c5c; */}   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 2rem;
  color: white;

  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  border-radius: 12px;

  @media (max-width: 900px) {
    padding: 1.2rem;
  }
`;

/* TITLE */
const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  margin: 0;
`;

/* RATING */
const Rating = styled.div`
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  opacity: 0.9;
`;

/* GRIND TYPE */
const Grind = styled.div`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
`;

/* FLAVOR NOTE */
const FlavorNote = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  font-size: clamp(1rem, 2vw, 1.4rem);
  opacity: 0.9;
`;

/* DESCRIPTION */
const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
`;

/* INFO GRID */
const InfoGrid = styled.div`
  display: grid;
  gap: 1rem;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

/* QUANTITY */
const QtyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: clamp(1.1rem, 3vw, 1.6rem);
`;

const QtyBox = styled.div`
  ${'' /* background: #8d8d8d; */}   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  display: flex;
  align-items: center;
  gap: 1.2rem;

  padding: 0.6rem 1rem;
  border-radius: 10px;

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const QtyButton = styled.button`
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  font-size: 1.8rem;
`;

/* PRICE BOX */
const PriceBox = styled.div`
  background: #1884ff;
  padding: 1rem;
  border-radius: 12px;

  display: flex;
  align-items: center;
  gap: 1.4rem;
  width: fit-content;

  font-size: clamp(1rem, 2vw, 1.4rem);
`;

const Price = styled.span`
  font-weight: bold;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  opacity: 0.7;
`;

const AddButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-weight: bold;

  font-size: clamp(1rem, 2vw, 1.3rem);
  cursor: pointer;
`;
const AddButtonLink = styled(NavLink)`
  ${'' /* border: none;
  background: none;
  color: white;
  font-weight: bold;

  font-size: clamp(1rem, 2vw, 1.3rem);
  cursor: pointer; */}
`;

function CofInfo() {
  const [count, setCount] = useState(1);
  function increment() { setCount(p => p + 1) }
  function decrement() { setCount(p => (p > 1 ? p - 1 : 1)) }
  return (
    <Wrapper>
      <Title>Durga Madhaba</Title>

      <Rating>⭐⭐⭐⭐⭐ 4.2</Rating>
      <Grind>Grind / Beans</Grind>

      <FlavorNote>
        Flavour Note
        <span>Caramel chocolate & Hint of citrus</span>
      </FlavorNote>

      <Description>
        Coffee is a popular brewed beverage made from roasted coffee beans.
        Arabica offers mild flavours, while Robusta brings a stronger kick.
        Enjoyed worldwide in forms like espresso, latte, cappuccino, and cold brew.
      </Description>

      <InfoGrid>
        <InfoRow>
          <span><GiCoffeeBeans /> 100% Arabica</span>
          <span><SiCoffeescript /> 20 Cups</span>
        </InfoRow>
        <InfoRow>
          <span><AiOutlineStop /> No Preservatives</span>
          <span><FaHandsHoldingCircle /> Hand Processed</span>
        </InfoRow>
        <InfoRow>
          <span><SlLocationPin /> From Chandragiri</span>
        </InfoRow>
      </InfoGrid>

      <QtyWrapper>
        Quantity:
        <QtyBox>
          <QtyButton onClick={decrement}>-</QtyButton>
          <span>{count}</span>
          <QtyButton onClick={increment}>+</QtyButton>
        </QtyBox>
      </QtyWrapper>

      <PriceBox>
        <Price>₹799</Price>
        <OldPrice>₹1499</OldPrice>
        <AddButton ><AddButtonLink to="/cart">Add to Cart</AddButtonLink></AddButton>
      </PriceBox>
    </Wrapper>
  );
}

export default CofInfo;
