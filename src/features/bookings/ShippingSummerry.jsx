import styled from "styled-components";
import Summerry from "../carts/Summerry";

/* MAIN WRAPPER */
const Wrapper = styled.div`
  width: 100%;
  ${'' /* background: #636363; */}border-radius:1rem;
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 2rem 1rem;

  display: flex;
  justify-content: center;
`;

/* INNER CONTENT (LEFT + RIGHT) */
const Content = styled.div`
  width: 100%;
  max-width: 1200px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

/* LEFT SHIPPING BOX */
const ShippingBox = styled.div`
  ${'' /* background: #8a8a8a; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 12px;
  padding: 1.2rem;
  color: white;
`;

/* TITLE */
const Title = styled.div`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #bdbdbd;
`;

/* ADDRESS BLOCK */
const AddressBlock = styled.div`
  ${'' /* background: #6e6e6e; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1rem;
  border-radius: 10px;

  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.5;
`;

const Label = styled.div`
  font-size: clamp(1rem, 2vw, 1.3rem);
  margin-bottom: 0.5rem;
  opacity: 0.9;
  font-weight: bold;
`;

const Name = styled.div`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const AddressText = styled.div`
  margin-bottom: 0.8rem;
  opacity: 0.9;
`;

const Contact = styled.div`
  opacity: 0.9;
`;

function ShippingSummerry() {
  return (
    <Wrapper>
      <Content>
        {/* LEFT SECTION */}
        <ShippingBox>
          <Title>Shipping Details</Title>

          <AddressBlock>
            <Label>Deliver to</Label>
            <Name>Ankit Sharma</Name>

            <AddressText>
              Maniratnam Road No. 06, Adityapur-2,
              Jamshedpur, Jharkhand - 831013, India
            </AddressText>

            <Contact>
              9341809141 <br />
              ankit@gmail.com
            </Contact>
          </AddressBlock>
        </ShippingBox>

        {/* RIGHT SECTION */}
        <Summerry />
      </Content>
    </Wrapper>
  );
}

export default ShippingSummerry;
