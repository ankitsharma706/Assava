import styled from "styled-components";

/* ADDRESS CONTAINER */
const AddressWrapper = styled.div`
  ${'' /* background: #757474; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1rem;
  border-radius: 8px;

  color: white;
  font-size: clamp(1rem, 2vw, 1.3rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  max-width: 420px;

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    max-width: 100%;
  }
`;

/* TEXT BOX */
const AddressText = styled.div`
  line-height: 1.4;
  font-weight: 400;
`;

/* DROPDOWN BUTTON */
const AddressToggleButton = styled.button`
  background: none;
  border: none;
  color: white;

  font-size: clamp(1.2rem, 3vw, 1.6rem);
  cursor: pointer;

  padding: 0.3rem 0.6rem;
  border-radius: 6px;

  &:hover {
    opacity: 0.85;
  }
`;

function Address() {
  return (
    <AddressWrapper>
      <AddressText>
        <strong>Your Address:</strong> 751030 — Ankit Sharma, ITER College, SOA
        University. Delivery expected by <strong>Day After Tomorrow</strong>.
      </AddressText>

      <AddressToggleButton>▼</AddressToggleButton>
    </AddressWrapper>
  );
}

export default Address;
