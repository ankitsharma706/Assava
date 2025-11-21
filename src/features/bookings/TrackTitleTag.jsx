import styled from "styled-components";
import { Link } from "react-router-dom";

/* WRAPPER */
const HeaderWrapper = styled.div`
  width: 100%;
  ${'' /* background: #838383; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
border-radius:10px;
  color: white;
  padding: 1.5rem 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: clamp(1.4rem, 4vw, 2.5rem);
`;

/* BACK BUTTON */
const BackButton = styled(Link)`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 0.4rem 0.8rem;

  &:hover {
    opacity: 0.8;
  }
`;

/* TEXT */
const Title = styled.div`
  font-weight: bold;
`;

function TrackTitleTag() {
  return (
    <HeaderWrapper>
      <BackButton to="/orderHistory">←</BackButton>
      <Title>My Orders</Title>
    </HeaderWrapper>
  );
}

export default TrackTitleTag;
