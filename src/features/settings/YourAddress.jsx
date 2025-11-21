import styled from "styled-components";

/* MAIN WRAPPER */
const Wrapper = styled.div`
  width: 100%;
  ${'' /* background: #7e7d7d; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  @media (max-width: 600px) {
    padding: 1.2rem;
  }
`;

/* TITLE BAR */
const Title = styled.h2`
  text-align: center;
  ${'' /* background: #8d8484; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1rem;
  border-radius: 8px;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: aliceblue;
  margin: 0 auto;
  width: 100%;
`;

/* FORM ROW */
const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  font-size: clamp(1.2rem, 2vw, 1.6rem);
  color: aliceblue;
`;

/* INPUT STYLE */
const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;

  font-size: 1rem;
  border: none;
  border-radius: 8px;
  outline: none;

  ${'' /* background: #bebfc0; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  color: #333;

  &:focus {
    color:white;
    ${'' /* background: #dcdcdc; */}
  }
`;

/* BUTTON ROW */
const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

/* BUTTONS */
const CancelButton = styled.button`
  flex: 1;
  padding: 0.9rem 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  background: #ff3030;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

const AddUpdateButton = styled.button`
  flex: 1;
  padding: 0.9rem 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  background: #357cff;
  color: white;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

function YourAddress() {
  return (
    <Wrapper>
      <Title>Your Address</Title>

      <FieldRow>
        <label>Full Name</label>
        <Input type="text" placeholder="Enter your full name" />
      </FieldRow>

      <FieldRow>
        <label>Address</label>
        <Input type="text" placeholder="Enter your address" />
      </FieldRow>

      <FieldRow>
        <label>Pin Code</label>
        <Input type="number" placeholder="Enter your pincode" />
      </FieldRow>

      <FieldRow>
        <label>City</label>
        <Input type="text" placeholder="Enter your city" />
      </FieldRow>

      <FieldRow>
        <label>State</label>
        <Input type="text" placeholder="Enter your state" />
      </FieldRow>

      <FieldRow>
        <label>Phone Number</label>
        <Input type="number" placeholder="Enter your phone number" />
      </FieldRow>

      <ButtonRow>
        <CancelButton>Cancel</CancelButton>
        <AddUpdateButton>Add / Update</AddUpdateButton>
      </ButtonRow>
    </Wrapper>
  );
}

export default YourAddress;
