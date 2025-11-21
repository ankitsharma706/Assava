import styled from "styled-components";

/* MAIN FAQ SECTION */
const FaqSection = styled.section`
  width: 100%;
  ${'' /* background: #818181; */}   background: linear-gradient(
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
const FaqTitle = styled.h2`
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

/* FAQ LIST CONTAINER (placeholder for future FAQ items) */
const FaqContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function Faq() {
  return (
    <FaqSection>
      <FaqTitle>Frequently Asked Questions</FaqTitle>

      {/* Placeholder — Add FAQ items here */}
      <FaqContainer>
        {/* Add FAQ items later, example:
        <FaqItem question="What makes Assava coffee special?" answer="Our beans are sourced…" />
        */}
      </FaqContainer>
    </FaqSection>
  );
}

export default Faq;
