import styled from "styled-components";
import YourAddress from "./YourAddress";
import YourPerInfo from "./YourPerInfo";

/* RESPONSIVE BOX */
const Boxes = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
 background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  ${'' /* background: #7e7d7d; */}
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

function Account() {
  return (
    <Boxes>
      <YourPerInfo />
      <YourAddress />
    </Boxes>
  );
}

export default Account;
