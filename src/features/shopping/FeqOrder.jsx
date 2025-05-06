import styled from "styled-components";

const FrequantlyOtherBox = styled.div`
  height: 600px;
  width: 100%;
  background: #11bb1a;
`;
const FreqTitle = styled.div`
  height: 90px;
  width: 100%;
  background: #a7a7a7;
  padding-top: 30px;
  font-size: 77px;
  padding-bottom: 10px;

  & span {
    margin-left: 50px;
  }
`;
function FeqOrder() {
  return (
    <FrequantlyOtherBox>
    <FreqTitle>
      <span>Frequently Product other</span>
    </FreqTitle>
  </FrequantlyOtherBox>
  )
}

export default FeqOrder
