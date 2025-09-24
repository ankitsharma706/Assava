import styled from "styled-components";

const TransitionBox = styled.div`
  /* margin-left: 50px; */
  height: 150px;
  width: 100%;
  display: flex;
  background: #6D6D6DFF;
  justify-content: center;
  padding-top: 30px;
`;
const TranisitionCircle = styled.div`
  height: 100px;
  width: 100px;
  /* margin-left: 5px; */
  border-radius: 50%;
  background: #b6b6b6;
`;
const TransitionHrLine = styled.div`
  height: 5px;
  width: 500px;
  margin-top: 50px;
  background: #000;
`;
const TransitionCircleName = styled.div`
  height: auto;
  /* width: ; */
  text-align: center;
  font-size: 20px;
`;
const TransitionInnerBox = styled.div``;
function TransitionBoxs() {
  return (
    <TransitionBox>
    <TransitionInnerBox>
      <TranisitionCircle></TranisitionCircle>
      <TransitionCircleName>PickUp</TransitionCircleName>
    </TransitionInnerBox>
    <TransitionHrLine />
    <TransitionInnerBox>
      <TranisitionCircle></TranisitionCircle>
      <TransitionCircleName>Transist</TransitionCircleName>
    </TransitionInnerBox>
    <TransitionHrLine />
    <TransitionInnerBox>
      <TranisitionCircle></TranisitionCircle>
      <TransitionCircleName>Delivered</TransitionCircleName>
    </TransitionInnerBox>
  </TransitionBox>
  )
}

export default TransitionBoxs
