import styled from "styled-components";
import ShoppingCard from "./ShoppingCard";

/* SECTION TITLE */
const Title = styled.h2`
  width: 100%;
  padding: 2rem 1rem 1rem;
  text-align: center;

  color: aliceblue;
  ${'' /* background: #b8b8b8; */}

  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: bold;
  margin: 0;
`;

/* GRID WRAPPER */
const GridWrapper = styled.div`
  width: 100%;
  ${'' /* background: #b8b8b8; */}
  
  padding: ${({ compact }) => (compact ? "1rem" : "2rem 1rem 3rem")};

  display: grid;
  gap: ${({ compact }) => (compact ? "1rem" : "2rem")};
  justify-items: center;

  ${({ compact }) =>
    compact
      ? `
        grid-template-columns: 1fr;
      `
      : `
        grid-template-columns: repeat(3, 1fr);
      `}

  /* Tablet */
  @media (max-width: 1024px) {
    ${({ compact }) =>
    compact
      ? `grid-template-columns: 1fr;`
      : `grid-template-columns: repeat(2, 1fr);`}
  }

  /* Mobile */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


function RecommendedBox({ compact = false }) {
  return (
    <>
      {!compact && <Title>Recommended Products for You</Title>}

      <GridWrapper compact={compact}>
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
      </GridWrapper>
    </>
  );
}


export default RecommendedBox;
