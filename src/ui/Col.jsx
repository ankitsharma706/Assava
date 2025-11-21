import styled from "styled-components";

const Cols = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;


function Col({children}) {
  return <Cols>{children}</Cols>;
}

export default Col;
