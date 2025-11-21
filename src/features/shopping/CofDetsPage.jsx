import styled from "styled-components";
import CofInfo from "./CofInfo";

/* MAIN WRAPPER */
const CofDetPage = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  ${'' /* background: #5c5c5c; */}
  color: aliceblue;

  display: flex;
  gap: 2rem;

  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

/* IMAGE WRAPPER */
const CofImgBox = styled.div`
  flex: 1.2;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    max-height: 900px;
    object-fit: cover;
    border-radius: 12px;

    @media (max-width: 900px) {
      max-height: 400px;
    }
  }
`;

function CofDetsPage() {
  return (
    <CofDetPage>
      <CofImgBox>
        <img src="coffee02.jpg" alt="coffee" />
      </CofImgBox>

      <CofInfo />
    </CofDetPage>
  );
}

export default CofDetsPage;
