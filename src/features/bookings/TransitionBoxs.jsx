import styled from "styled-components";

/* MAIN CONTAINER */
const TimelineWrapper = styled.div`
  width: 100%;
  ${'' /* background: #6d6d6d; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
border-radius:1rem;
  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  flex-wrap: wrap;
`;

/* STEP CONTAINER */
const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* CIRCLE (Active or Inactive) */
const Circle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;

  background: ${({ active }) => (active ? "#15af1aff" : "#be8d05ff")};
  transition: 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

/* LABEL */
const Label = styled.div`
  margin-top: 0.5rem;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  color: white;
  text-align: center;
`;

/* CONNECTING LINE */
const Line = styled.div`
  height: 4px;
  width: clamp(80px, 15vw, 180px);
  background: #ddd;

  @media (max-width: 600px) {
    width: 70px;
  }
`;

function TransitionBoxs() {
  return (
    <TimelineWrapper>

      {/* STEP 1 */}
      <Step>
        <Circle active={true}>1</Circle>
        <Label>Picked Up</Label>
      </Step>

      <Line />

      {/* STEP 2 */}
      <Step>
        <Circle active={true}>2</Circle>
        <Label>In Transit</Label>
      </Step>

      <Line />

      {/* STEP 3 */}
      <Step>
        <Circle active={false}>3</Circle>
        <Label>Delivered</Label>
      </Step>

    </TimelineWrapper>
  );
}

export default TransitionBoxs;
