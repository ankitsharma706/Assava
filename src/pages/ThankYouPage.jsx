import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

/* FADE IN ANIMATION */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* MAIN WRAPPER */
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  ${'' /* background: #7e7d7d; */}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem 1rem;
  box-sizing: border-box;
`;

/* MESSAGE BOX */
const MessageBox = styled.div`
  ${'' /* background: #666666; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 2rem 2.5rem;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  color: white;

  text-align: center;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.6;

  animation: ${fadeIn} 0.4s ease-out;

  h1 {
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    margin-bottom: 1rem;
  }
`;

/* BUTTON BOX */
const ButtonBox = styled.div`
  margin-top: 2rem;
  ${'' /* background: #5e5d5e; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1rem;

  border-radius: 12px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 600px;

  animation: ${fadeIn} 0.5s ease-out;
`;

/* LINK BUTTON */
const StyledButtonLink = styled(NavLink)`
  padding: 0.8rem 1.4rem;
  font-size: clamp(1rem, 2vw, 1.3rem);
 background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  ${'' /* background: #7a7a7a; */}
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;

  transition: 0.2s ease;

  &:hover {
    ${'' /* background: #999999; */}
    opacity:0.7;
  }
`;

function ThankYouPage() {
  return (
    <Wrapper>
      <MessageBox>
        <h1>☕️ Thank You for Your Order!</h1>
        We're brewing something special just for you. Your order has been
        received and is being processed.
        <br /><br />
        You’ll receive tracking details within 2 hours.
        Sit back, relax, and get ready to enjoy a cup of something truly satisfying.
      </MessageBox>

      <ButtonBox>
        <StyledButtonLink to="/home">Home</StyledButtonLink>
        <StyledButtonLink to="/tracking">Track Your Order</StyledButtonLink>
      </ButtonBox>
    </Wrapper>
  );
}

export default ThankYouPage;
