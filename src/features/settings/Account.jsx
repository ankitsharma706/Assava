import styled from "styled-components";
import YourAddress from "./YourAddress";
import YourPerInfo from "./YourPerInfo";

const Boxes = styled.div`
  height: auto;
  width: 1200px;
  background: #7e7d7d;
  margin-left: 320px;
  border-radius: 8px;
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
