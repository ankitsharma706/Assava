import styled from "styled-components";
import Col from "../../ui/Col";
import Row from "../../ui/Row";

const CustomerReview = styled.div`
  height: 800px;
  width: 100%;
  background: #9b9b9b;
`;
const CustRevImg = styled.div`
  height: 500px;
  width: 700px;
  /* background: #cfb74c; */
  margin-left: 200px;
  margin-top: 60px;
  border-radius: 10px;
`;
const CustRevName = styled.div`
  height: 60px;
  width: 700px;
  margin-left: 40px;
  margin-top: 30px;
  border-radius: 10px;
  color: aliceblue;
  font-size: 50px;
`;
const CustRevRating = styled.div`
  height: 50px;
  width: 400px;
  margin-left: 40px;
  border-radius: 10px;
  color: aliceblue;
  font-size: 30px;
`;
const CustRevResponse = styled.div`
  height: 200px;
  width: 500px;
  margin-left: 40px;
  margin-top: 60px;
  border-radius: 10px;
  color: aliceblue;
  font-size: 30px;
`;
const CustRevDsc = styled.div`
  height: 100px;
  width: 60%;
  /* background: #ff08f3; */
  color: aliceblue;
  font-size: 100px;
  text-align: center;
  padding-top: 30px;
  margin-left: 300px;
`;
const CustRevBox = styled.div`
  height: 500px;
  width: 70%;
  background: #7a7979;
  color: aliceblue;
  font-size: 100px;
  border-radius: 10px;
  margin-top: 60px;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
function CustomersReview() {
  return (
    <CustomerReview>
    <CustRevDsc>Our Happy! Customers</CustRevDsc>
    <Row>
      <CustRevImg>
        <img src="ourcustomers01.jpg" alt="cus" height={500} width={700} />
        {/* <img src="ourcustomers.jpg" alt="cus" height={500} width={800} /> */}
        {/* <img src="ourcustomers01.jpg" alt="cus" height={500} width={800} /> */}
        {/* <img src="ourcustomers03.jpg" alt="cus" height={500} width={800} /> */}
      </CustRevImg>
      <Col>
        <CustRevBox>
          <CustRevName>Ankit Sharma</CustRevName>
          <CustRevRating>
            ⭐⭐⭐⭐⭐<span>4.2</span>
          </CustRevRating>
          <CustRevResponse>
            Absolutely love the caramel latte here! Smooth, not too sweet,
            and the espresso has a deep, rich flavor. Cozy vibes and
            friendly staff make it a perfect morning stop friendly staff
            make it a perfect morning stop friendly staff make it a perfect
            morning stop
          </CustRevResponse>
        </CustRevBox>
      </Col>
    </Row>
  </CustomerReview>
  )
}

export default CustomersReview
