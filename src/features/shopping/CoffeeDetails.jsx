import styled from "styled-components";
import CofDetsPage from "./CofDetsPage";
import FeqOrder from "./FeqOrder";
import CoffeeDescBox from "./CoffeeDescBox";
import CustomerReview from "./CustomerReview";
import Faq from "./Faq";
const CoffeeDetail = styled.div`
  height: auto;
  width: 100%;
  color: aliceblue;
  background: #c9c9c9;
`;



function CoffeeDetails() {
  return (
    <CoffeeDetail>
      <CofDetsPage />
      <FeqOrder />
      <CoffeeDescBox/>
      <CustomerReview/>
      <Faq/>
    </CoffeeDetail>
  );
}

export default CoffeeDetails;
