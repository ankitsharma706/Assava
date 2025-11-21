import styled from "styled-components";

/* MAIN SECTION */
const FeqOrderSection = styled.section`
  width: 100%;
  ${'' /* background: #8a8a8a; */}
     background: linear-gradient(
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

/* CONTENT BOX (empty placeholder for now) */
const ContentBox = styled.div`
  max-width: 900px;
  width: 100%;
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function FeqOrder() {
  return (
    <FeqOrderSection>
      <Title>Frequently Product Other</Title>

      <ContentBox>
        {/* Add product suggestions here later */}
      </ContentBox>
    </FeqOrderSection>
  );
}

export default FeqOrder;
