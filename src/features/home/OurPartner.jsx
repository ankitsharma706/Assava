import styled from "styled-components";
import Col from "../../ui/Col";

const OurPartners = styled.div`
  height: 800px;
  width: 100%;
  background: #bbbbbb;
  /* display: flex; */
`;
const Name = styled.div`
  background: #bbbbbb;
  height: 70px;
  width: 100%;
  font-size: 75px;
  text-align: center;
  padding-top: 50px;
  color: aliceblue;
`;
const PartnerName = styled.div`
  /* background: #ca0202; */
  height: 50px;
  width: 300px;
  text-align: center;
  color: aliceblue;
  font-size: xx-large;
`;
const PartImg = styled.div`
  background: #29f8ff;
  height: 350px;
  width: 300px;
  border-radius: 10px;
`;
const PartImgBox = styled.div`
  /* background: #59ff17; */
  height: 450px;
  width: 90%;
  margin-top: 100px;
  margin-left: 90px;
  display: flex;
  justify-content: space-around;
`;
function OurPartner() {
  return (
    <OurPartners>
        <Name>Our Beautiful Franchise Partners</Name>
        <PartImgBox>
          <Col>
            <PartImg>
              <img src="javaclinic.png" alt="java" height={350} width={300} />
            </PartImg>
            <PartnerName>Java Clinic</PartnerName>
          </Col>
          <Col>
            <PartImg>
              <img src="threecharoits.png" alt="" height={350} width={300}/>
            </PartImg>
            <PartnerName>The Three Chariots</PartnerName>
          </Col>
          <Col>
            <PartImg>
              <img src="travel.png" alt="travel" height={350} width={300}/>
            </PartImg>
            <PartnerName>Travelistan.in</PartnerName>
          </Col>
          <Col>
            <PartImg>
              <img src="Glaz.png" alt="" height={350} width={300}/>
            </PartImg>
            <PartnerName>Glaze</PartnerName>
          </Col>
        </PartImgBox>
      </OurPartners>
  )
}

export default OurPartner
