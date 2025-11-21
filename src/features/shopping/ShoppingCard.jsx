// import styled from "styled-components";
// import AddToCart from "./AddToCart";
// import { Link } from "react-router-dom";

// /* CARD WRAPPER */
// const Card = styled.div`
//   width: 100%;
//   max-width: 330px;
//   background: #575252;
//   border-radius: 15px;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   color: white;

//   transition: transform 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-6px);
//   }
// `;

// /* IMAGE WRAPPER */
// const ImageBox = styled.div`
//   width: 100%;
//   height: 260px;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// /* LABEL TAG */
// const CoffeeType = styled.div`
//   background-color: #00c458;
//   padding: 6px 14px;
//   margin: 0.8rem 1rem 0;
//   font-size: 0.95rem;
//   border-radius: 20px;
//   width: fit-content;
//   text-transform: capitalize;
// `;

// /* TEXT SECTION */
// const Content = styled.div`
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// /* NAME */
// const Name = styled.h3`
//   font-size: 1.6rem;
//   margin: 0;
//   text-transform: uppercase;
// `;

// /* DESCRIPTION */
// const Description = styled.p`
//   font-size: 0.95rem;
//   opacity: 0.8;
//   line-height: 1.5;
//   margin: 0;
// `;

// /* ACTIONS */
// const Bottom = styled.div`
//   margin-top: auto;
// `;

// function ShoppingCard() {
//   return (
//     <Card>
//       <Link to="/coffeeDetail">
//         <ImageBox>
//           <img src="cup.jpg" alt="Coffee" />
//         </ImageBox>
//       </Link>

//       <CoffeeType>Instant</CoffeeType>

//       <Content>
//         <Name>Coffee - 01</Name>

//         <Bottom>
//           <AddToCart />
//         </Bottom>

//         <Description>
//           Grab our new instant coffee jars in Original & French Vanilla flavours
//           and get a FREE Ground Coffee Mug! Perfect for everyday brewing.
//         </Description>
//       </Content>
//     </Card>
//   );
// }

// export default ShoppingCard;
import styled, { css } from "styled-components";
import AddToCart from "./AddToCart";

/* MAIN CARD CONTAINER */
const Card = styled.div`
  ${'' /* background-color: #575252; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 10px;
  overflow: hidden;

  width: ${({ compact }) => (compact ? "240px" : "330px")};
  height: ${({ compact }) => (compact ? "390px" : "640px")};

  transition: 0.3s ease;
`;

/* IMAGE BOX */
const ImageBox = styled.div`
  width: 100%;
  overflow: hidden;

  ${({ compact }) =>
    compact
      ? css`
          height: 150px;

          img {
            height: 150px;
            width: 100%;
            object-fit: cover;
          }
        `
      : css`
          height: 300px;
          img {
            height: 300px;
            width: 100%;
            object-fit: cover;
          }
        `}
`;

/* COFFEE TYPE BADGE */
const TypeBadge = styled.div`
  background-color: #00c458;
  color: white;
  text-align: center;

  margin: ${({ compact }) => (compact ? "10px auto" : "10px 0 10px 30px")};
  padding: ${({ compact }) => (compact ? "3px 10px" : "5px 15px")};

  width: ${({ compact }) => (compact ? "80px" : "100px")};

  border-radius: 40px;
  font-size: ${({ compact }) => (compact ? "0.9rem" : "1.3rem")};
`;

/* NAME */
const Name = styled.div`
  color: aliceblue;
  font-weight: 200;

  margin-left: ${({ compact }) => (compact ? "10px" : "15px")};
  margin-bottom: ${({ compact }) => (compact ? "5px" : "20px")};

  font-size: ${({ compact }) => (compact ? "1.1rem" : "2rem")};
  text-transform: uppercase;
`;

/* DESCRIPTION */
const Description = styled.div`
  color: aliceblue;

  ${({ compact }) =>
    compact
      ? css`
          font-size: 0.8rem;
          padding: 5px 10px;
          height: 60px;
        `
      : css`
          font-size: 1rem;
          padding: 30px 10px;
          height: 170px;
        `}

  overflow: hidden;
  text-overflow: ellipsis;
`;

/* ADD TO CART CONTAINER */
const BottomSection = styled.div`
  padding: ${({ compact }) => (compact ? "5px 10px" : "15px")};
`;

function ShoppingCard({ compact = false }) {
  return (
    <Card compact={compact}>
      <a href="/coffeeDetail">
        <ImageBox compact={compact}>
          <img src="cup.jpg" alt="coffee" />
        </ImageBox>
      </a>

      <TypeBadge compact={compact}>Instant</TypeBadge>

      <Name compact={compact}>Coffee - 01</Name>

      <BottomSection compact={compact}>
        <AddToCart />
        <Description compact={compact}>
          Grab our new instant coffee jars in Original & French Vanilla flavours
          and get a FREE Ground Coffee Mug! Perfect for everyday brewing.
        </Description>
      </BottomSection>
    </Card>
  );
}

export default ShoppingCard;
