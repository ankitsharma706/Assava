import styled from "styled-components";

/* MAIN WRAPPER */
const Wrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  ${'' /* background: #9c9b9b; */}   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 2rem 1rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;


/* MAIN TITLE */
const MainTitle = styled.h2`
  ${'' /* background: #a7a7a7; */}   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1.5rem 1rem;
  text-align: center;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: bold;
  border-radius: 10px;
  margin: 0;
  color: white;
`;

/* FLEX ROW FOR EACH SECTION */
const CoffeeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;

  /* reverse layout if needed (image right) */
  &.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/* IMAGE BOX */
const ImageBox = styled.div`
  flex: 1;
  min-width: 300px;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    max-height: 550px;
    object-fit: cover;
    border-radius: 15px;
  }
`;

/* DETAILS BOX */
const DetailsBox = styled.div`
  flex: 1;
  min-width: 300px;
  ${'' /* background: #858585;    */}
  background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  color: white;
  padding: 2rem;
  border-radius: 15px;
`;

/* TITLE INSIDE DETAILS */
const Subtitle = styled.h3`
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 1.5rem;
`;

/* DESCRIPTION PARAGRAPH */
const Description = styled.p`
  font-size: clamp(1.1rem, 2.4vw, 1.5rem);
  line-height: 1.7;
  opacity: 0.95;
`;

function CoffeeDescBox() {
  return (
    <Wrapper>
      <MainTitle>Coffee Description</MainTitle>

      {/* 1) Pure Arabica */}
      <CoffeeRow>
        <ImageBox>
          <img src="coffee02.jpg" alt="Pure Arabica" />
        </ImageBox>

        <DetailsBox>
          <Subtitle>Pure Arabica</Subtitle>
          <Description>
            Sourced from the misty slopes of Chandragiri Hills, this 100%
            Arabica offers a smooth, medium-bodied flavor with floral notes and
            a subtle hint of citrus. Handpicked and sun-dried, it delivers a
            clean, refined cup.
          </Description>
        </DetailsBox>
      </CoffeeRow>

      {/* 2) Sun-Kissed Robusta */}
      <CoffeeRow className="reverse">
        <ImageBox>
          <img src="coffee03.jpg" alt="Sun-Kissed Robusta" />
        </ImageBox>

        <DetailsBox>
          <Subtitle>Sun-Kissed Robusta</Subtitle>
          <Description>
            Bold and intense, this Robusta is cultivated in the sun-drenched
            estates of Coorg. With a full-bodied profile and strong earthy
            tones, it’s ideal for espresso lovers looking for a powerful caffeine
            kick and a lingering chocolatey finish.
          </Description>
        </DetailsBox>
      </CoffeeRow>

      {/* 3) Honey Processed Blend */}
      <CoffeeRow>
        <ImageBox>
          <img src="coffee04.jpg" alt="Honey Processed Blend" />
        </ImageBox>

        <DetailsBox>
          <Subtitle>Honey Processed Blend</Subtitle>
          <Description>
            This unique blend from Araku Valley uses the honey processing method,
            where some fruit is left on the bean during drying. The result is a
            naturally sweet cup with notes of caramel, red berries, and a creamy
            mouthfeel that lingers gently.
          </Description>
        </DetailsBox>
      </CoffeeRow>

      {/* 4) Shade-Grown Specialty */}
      <CoffeeRow className="reverse">
        <ImageBox>
          <img src="coffee05.jpg" alt="Shade-Grown Specialty" />
        </ImageBox>

        <DetailsBox>
          <Subtitle>Shade-Grown Specialty</Subtitle>
          <Description>
            Grown under a lush forest canopy in the Western Ghats, this coffee
            benefits from slow ripening and natural biodiversity. Expect a
            balanced cup with nutty undertones, mild acidity, and a hint of
            spice, reflecting its sustainable roots.
          </Description>
        </DetailsBox>
      </CoffeeRow>
    </Wrapper>
  );
}

export default CoffeeDescBox;
