import styled from "styled-components";
import CustomersReview from "../features/home/CustomersReview";
import Franchasises from "../features/home/Franchasises";
import HowItsWork from "../features/home/HowItsWork";

import HomeProducts from "../features/home/HomeProducts";
import OurPartner from "../features/home/OurPartner";

const Box1 = styled.div`
  height: 850px;
  width: 100%;
  background: #9c9c9cff;
`;

function Home() {
  return (
    <>
      <Box1></Box1>
      <HomeProducts />
      <OurPartner />
      <Franchasises />
      <HowItsWork />
      <CustomersReview />
    </>
  );
}

export default Home;
