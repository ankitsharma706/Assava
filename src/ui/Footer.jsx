import styled from "styled-components";
import BoxCategoryAbouts from "./BoxCategoryAbouts";
import BoxCopyRights from "./BoxCopyRights";

const Box = styled.div`
  height: 600px;
  width: 100%;
  background: #696964;
  /* position: absolute; */
  position: relative;
  bottom: 0px;
`;

function Footer() {
  return (
    <Box>
      <BoxCategoryAbouts />
      <BoxCopyRights />
    </Box>
  );
}

export default Footer;
