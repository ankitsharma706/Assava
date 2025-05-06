import styled from "styled-components";

const BoxCopyRight = styled.div`
  margin-top: 50px;
  bottom: 10px;
  height: 50px;
  width: 100%;
  background: #978415;
  text-align: center;
  font-size: xx-large;
  color: aliceblue;
  padding-top: 8px;
`;
function BoxCopyRights() {
  return (
    <BoxCopyRight>
        &copy; Copyright 2025 <span>Privacy</span>
      </BoxCopyRight>
  )
}

export default BoxCopyRights
