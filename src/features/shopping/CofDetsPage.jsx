import styled from "styled-components";
import CofInfo from "./CofInfo"

const CofDetPage = styled.div`
  height: auto;
  width: 100%;
  color: aliceblue;
  background: #5c5c5c;
  display: flex;
`;
const CofImgBox = styled.div`
  height: 900px;
  width: 50%;
  /* background: #11bb1a; */
  & img {
    border-radius: 0 0 15px 0;
  }
`;
function CofDetsPage() {
  return (
    <CofDetPage>
    <CofImgBox>
      <img src="coffee02.jpg" alt="cd" height={1100} width="100%" />
    </CofImgBox>
    <CofInfo />
  </CofDetPage>
  )
}

export default CofDetsPage
