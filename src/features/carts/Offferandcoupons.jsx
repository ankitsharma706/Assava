import styled from "styled-components";

/* MAIN WRAPPER */
const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
  ${'' /* background: #6c6c6c; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 12px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 600px) {
    padding: 1rem;
    gap: 0.8rem;
  }
`;

/* TITLE */
const OfferTitle = styled.div`
  width: 100%;
  ${'' /* background: #4f4f4f; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 0.9rem 1rem;
  text-align: center;

  color: white;
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 600;
  border-radius: 10px;
`;

/* APPLY COUPON BUTTON */
const ApplyCouponButton = styled.button`
  width: 100%;
  ${'' /* background: #757575; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 0.9rem 1rem;
  border: none;
  border-radius: 10px;

  color: white;
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  font-weight: 500;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  transition: 0.2s ease;

  &:hover {
     background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
opacity:0.6;
  }
`;

function Offferandcoupons() {
  return (
    <Wrapper>
      <OfferTitle>Offers & Benefits</OfferTitle>
      <ApplyCouponButton>
        Apply Coupon →
      </ApplyCouponButton>
    </Wrapper>
  );
}

export default Offferandcoupons;
