import styled from "styled-components";
import Col from "../../ui/Col";

/* MAIN SECTION */
const Section = styled.section`
  width: 100%;
  ${'' /* background: #bbbbbb; */}
  padding: 4rem 1rem;
  color: white;
`;

/* TITLE */
const Title = styled.h2`
  text-align: center;
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 3rem;
  font-weight: bold;
`;

/* GRID FOR PARTNER CARDS */
const PartnersGrid = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  display: grid;
  gap: 2rem;

  /* 4 columns on desktop */
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

/* CARD IMAGE WRAPPER */
const LogoBox = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 3px;
    border-radius: 12px;

    background: linear-gradient(
      to right,
      #4a2e05,
      #bc8c2a,
      #4a2e05
    );

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);

    -webkit-mask-composite: xor;
    mask-composite: exclude;

    z-index: -1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;  /* fills perfectly */
    border-radius: 12px;
    position: relative;
    z-index: 2;
    background: none;   /* removed white */
    padding: 0;         /* removed padding */
  }
`;



/* PARTNER NAME TEXT */
const PartnerName = styled.p`
  margin-top: 0.8rem;
  text-align: center;
  font-size: clamp(1.2rem, 2vw, 1.6rem);
  font-weight: bold;
  color: white;
`;

function OurPartner() {
  return (
    <Section>
      <Title>Our Beautiful Franchise Partners</Title>

      <PartnersGrid>
        <Col>
          <LogoBox>
            <img src="javaclinic.png" alt="java clinic" />
          </LogoBox>
          <PartnerName>Java Clinic</PartnerName>
        </Col>

        <Col>
          <LogoBox>
            <img src="threecharoits.png" alt="Three Chariots" />
          </LogoBox>
          <PartnerName>The Three Chariots</PartnerName>
        </Col>

        <Col>
          <LogoBox>
            <img src="travel.png" alt="Travelistan" />
          </LogoBox>
          <PartnerName>Travelistan.in</PartnerName>
        </Col>

        <Col>
          <LogoBox>
            <img src="Glaz.png" alt="Glaze" />
          </LogoBox>
          <PartnerName>Glaze</PartnerName>
        </Col>
      </PartnersGrid>
    </Section>
  );
}

export default OurPartner;
