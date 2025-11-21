import styled from "styled-components";

/* MAIN WRAPPER */
const Wrapper = styled.section`
  width: 100%;
  ${'' /* background: #808080; */}   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 3rem 1rem 4rem;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* TITLE BAR */
const Title = styled.h2`
  width: 100%;
  ${'' /* background: #a7a7a7; */}   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1.5rem 1rem;

  text-align: center;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: bold;
  margin: 0;
  border-radius: 8px;
`;

function CustomerReview() {
  return (
    <Wrapper>
      <Title>Customer Review</Title>
    </Wrapper>
  );
}

export default CustomerReview;
