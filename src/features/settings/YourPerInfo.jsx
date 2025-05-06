import styled from "styled-components";

const YourPersonalInformation = styled.div`
  height: auto;
  width: 1200px;
  /* background: #26c7b9; */

  align-content: center;

  border-radius: 8px;
`;

const AddUpdateCancel = styled.div`
  height: 60px;
  width: 500px;
  /* background: #5517ff; */
  justify-content: space-between;
  align-content: center;
  margin-top: 40px;
  display: flex;
  margin-left: 600px;
  & input {
    /* border-radius: 8px; */
    border: none;
    display: flex;
    font-size: 36px;
    color: aliceblue;
    background: #bdbbbb;
  }
`;
const AddUpdate = styled.button`
  cursor: pointer;
  height: 60px;
  width: 50%;
  background: #357cff;
  color: aliceblue;
  font-size: 36px;
  align-content: center;
  padding-left: 10px;
  margin-left: 10px;
  border-radius: 14px;
  & input {
    border: none;
    /* border-radius: 8px; */
    display: flex;
    font-size: 36px;
    color: aliceblue;
    background: #bdbbbb;
  }
`;
const Cancel = styled.button`
  padding-left: 10px;
  cursor: pointer;
  height: 60px;
  width: 40%;
  background: #ff1717;
  border-radius: 14px;
  & input {
    display: flex;
    background: #bdbbbb;
  }
  font-size: 36px;
  color: aliceblue;
  align-content: center;
  /* margin-top: 40px; */
  border-radius: 8px;
`;
const TitileTag = styled.div`
  text-align: center;
  height: 80px;
  background: #8d8484;
  width: 90%;
  margin: 10px;
  margin-left: 70px;
  padding-top: 10px;
  border-radius: 8px;
  font-size: 55px;
  color: aliceblue;
`;
const YourDetail = styled.div`
  /* text-align: center; */
  height: 60px;
  /* background: #bd1d1d; */
  width: 70%;
  margin: 10px;
  margin-left: 10%;
  border-radius: 8px;
  justify-content: space-around;
  font-size: 45px;
  color: aliceblue;
  & input {
    border: none;
    padding: 15px;
    background: #bebfc0;
    color: #d5d6d6;
    border-radius: 8px;
    float: right;
    font-size: 22px;
  }
`;
function YourPerInfo() {
  return (
    <YourPersonalInformation>
    <TitileTag>Your Personal Information</TitileTag>
    <YourDetail>
      <span>Full Name</span>
      <input type="text" placeholder="Enter your Full Name" />
    </YourDetail>
    <YourDetail>
      <span>Email Address</span>
      <input type="email" placeholder="Enter your Email Address" />
    </YourDetail>
    <YourDetail>
      <span>Phone Number</span>
      <input type="number" placeholder="Enter your Phone No." />
    </YourDetail>
    <AddUpdateCancel>
      <Cancel>Cancel</Cancel>
      <AddUpdate>Add/Update</AddUpdate>
    </AddUpdateCancel>
  </YourPersonalInformation>
  )
}

export default YourPerInfo
