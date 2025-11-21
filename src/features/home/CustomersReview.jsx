import styled from "styled-components";
import Col from "../../ui/Col";
import Row from "../../ui/Row";

/* MAIN SECTION */
const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;  /* center content */
  justify-content: center;
  text-align: center;   /* title centered */

  color: white;
`;

/* SECTION TITLE */
const Title = styled.h2`
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: bold;
  margin-bottom: 3rem;
`;

/* MAIN ROW WITH PERFECT CENTERING */
const CenterRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  max-width: 1400px;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

/* IMAGE BOX */
const ImageContainer = styled.div`
  max-width: 600px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }
`;

/* REVIEW INFORMATION BOX */
const ReviewCard = styled.div`
  background: linear-gradient(
    to right,
    #4a2e05,
    #bc8c2a,
    #4a2e05
  );
  color: aliceblue;
  border-radius: 12px;

  padding: 2rem;
  max-width: 600px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

/* NAME */
const Name = styled.h3`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  margin: 0;
`;

/* RATING */
const Rating = styled.div`
  font-size: clamp(1.3rem, 3vw, 1.8rem);
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  span {
    opacity: 0.8;
  }
`;

/* RESPONSE TEXT */
const Response = styled.p`
  font-size: clamp(1rem, 2vw, 1.4rem);
  line-height: 1.6;
  margin: 0;
`;

function CustomersReview() {
  return (
    <Section>
      <Title>Our Happy Customers</Title>

      <CenterRow>
        <ImageContainer>
          <img src="ourcustomers01.jpg" alt="Customer" />
        </ImageContainer>

        <ReviewCard>
          <Name>Ankit Sharma</Name>

          <Rating>
            ⭐⭐⭐⭐⭐ <span>4.2</span>
          </Rating>

          <Response>
            Absolutely love the caramel latte here! Smooth, not too sweet,
            and the espresso has a rich flavor. Cozy vibes and friendly
            staff make it the perfect morning stop. Highly recommended!
          </Response>
        </ReviewCard>
      </CenterRow>
    </Section>
  );
}

export default CustomersReview;
