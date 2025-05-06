import styled from "styled-components";

const HowItsWorks = styled.div`
  height: 1000px;
  width: 100%;
  background: #7a7a7a;
`;
const HowWorkName = styled.div`
  height: 100px;
  width: 60%;
  /* background: #ff08f3; */
  color: aliceblue;
  font-size: 100px;
  text-align: center;
  padding-top: 30px;
  margin-left: 400px;
`;
const HowWorkCircle = styled.div`
  height: 250px;
  width: 250px;
  background: #08ff8c;
  color: aliceblue;
  border-radius: 50%;
  font-size: 30px;
  /* text-align: center; */
  & img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HowWorkLineHor = styled.div`
  height: 5px;
  width: 180px;
  background: #d1d1d1;
  color: aliceblue;
  margin-top: 120px;
  border-radius: 5px;
`;
const HowWorkLineVer = styled.div`
  height: 150px;
  border-radius: 5px;
  width: 5px;
  background: #ffffff;
  margin-left: 1390px;
`;
const Reactangle1 = styled.div`
  margin: 30px;
  margin-top: 80px;
  margin-left: 400px;
  margin-bottom: 0;
  /* background: #ad3030; */
  display: flex;
  /* gap: 10rem; */
  /* justify-content: space-around; */
`;
const Reactangle2 = styled.div`
  margin: 130px;
  margin-top: 0;
  /* background: #ad3030; */
  display: flex;
  margin-left: 400px;
`;
function HowItsWork() {
  return (
    <HowItsWorks>
      <HowWorkName>How To Make Real Coffee</HowWorkName>
      <Reactangle1>
        <HowWorkCircle>
          <img src="roast.png" alt="work" height={250} width={250} />
        </HowWorkCircle>
        <HowWorkLineHor />

        <HowWorkCircle>
          <img src="blend.png" alt="work" height={250} width={250} />
        </HowWorkCircle>
        <HowWorkLineHor />
        <HowWorkCircle>
          <img src="glasswithfilter.jpg" alt="work" height={250} width={250} />
        </HowWorkCircle>
      </Reactangle1>
      <HowWorkLineVer />
      <Reactangle2>
        <HowWorkCircle>
          <img src="servecoffee.jpg" alt="work" height={250} width={250} />
        </HowWorkCircle>
        <HowWorkLineHor />

        <HowWorkCircle>
          <img src="serveimage.png" alt="work" height={250} width={250} />
        </HowWorkCircle>
        <HowWorkLineHor />
        <HowWorkCircle>
          <img src="addwater.png" alt="work" height={250} width={250} />
        </HowWorkCircle>
      </Reactangle2>
    </HowItsWorks>
  );
}

export default HowItsWork;
