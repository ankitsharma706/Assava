import styled from "styled-components";
import { Link } from "react-router-dom";

/* FOOTER COPYRIGHT */
const CopyrightBar = styled.div`
  width: 100%;
  background: #3a3a3a;
  color: #f1f1f1;

  padding: 1rem 0;
  text-align: center;

  font-size: clamp(0.9rem, 2vw, 1.2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  margin-top: 3rem;
`;

/* PRIVACY LINK */
const PrivacyLink = styled(Link)`
  color: #ffd86b;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

function BoxCopyRights() {
  const year = new Date().getFullYear();

  return (
    <CopyrightBar>
      © {year} ASSAVA — <PrivacyLink to="/privacy">Privacy</PrivacyLink>
    </CopyrightBar>
  );
}

export default BoxCopyRights;
