import styled from "styled-components";
import { Link } from "react-router-dom";

/* MAIN WRAPPER */
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  width: 100%;
  padding: 1rem 0;

  color: white;
`;

/* LOGO STYLES */
const Logo = styled.div`
  width: 80px;
  height: 80px;

  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

/* NAME */
const BrandName = styled.div`
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
`;

function UserAvatars() {
  return (
    <Wrapper>
      <Link to="/home">
        <Logo>
          <img src="logoassavas01.jpg" alt="Assava logo" />
        </Logo>
      </Link>

      <BrandName>ASSAVA</BrandName>
    </Wrapper>
  );
}

export default UserAvatars;
