import styled from "styled-components";

const Rows = styled.div`
  display: flex;
  gap: 16px; //optional spacing between children
`;

function Row({children}) {
  return <Rows>{children}</Rows>;
}

export default Row;
