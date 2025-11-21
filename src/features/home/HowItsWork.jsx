import styled from "styled-components";

/* SECTION WRAPPER */
const Section = styled.section`
  width: 100%;
  ${'' /* background: #7a7a7a; */}
  padding: 4rem 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* TITLE */
const Title = styled.h2`
  font-size: clamp(2rem, 6vw, 4rem);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
`;

/* MAIN GRID FOR STEPS (HORIZONTAL ON DESKTOP, VERTICAL ON MOBILE) */
const StepsRow = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

/* CIRCLE FOR IMAGES */
const StepCircle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  overflow: hidden;
  ${'' /* background: #08ff8c; */}
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

/* LINE BETWEEN CIRCLES — auto-size based on layout */
const StepLine = styled.div`
  height: 6px;
  width: 120px;
  background: #e2e2e2;
  border-radius: 4px;

  @media (max-width: 900px) {
    width: 6px;
    height: 80px;
  }
`;

function HowItsWork() {
  return (
    <Section>
      <Title>How To Make Real Coffee</Title>

      {/* FIRST ROW */}
      <StepsRow>
        <StepCircle>
          <img src="roast.png" alt="Roast Coffee" />
        </StepCircle>

        <StepLine />

        <StepCircle>
          <img src="blend.png" alt="Blend Coffee" />
        </StepCircle>

        <StepLine />

        <StepCircle>
          <img src="glasswithfilter.jpg" alt="Filter Coffee" />
        </StepCircle>
      </StepsRow>

      {/* SECOND ROW */}
      <StepsRow style={{ marginTop: "4rem" }}>
        <StepCircle>
          <img src="servecoffee.jpg" alt="Serve Coffee" />
        </StepCircle>

        <StepLine />

        <StepCircle>
          <img src="serveimage.png" alt="Coffee Image" />
        </StepCircle>

        <StepLine />

        <StepCircle>
          <img src="addwater.png" alt="Add Water" />
        </StepCircle>
      </StepsRow>
    </Section>
  );
}

export default HowItsWork;
