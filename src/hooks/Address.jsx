import styled from "styled-components";

const Addresss = styled.div`
  margin-left: 0;
  height: 120px;
  width: 45%;
  background-color: #757474;
  border-radius: 7px;
  font-size: 30px;

  padding-top: 20px;

  color: aliceblue;
`;
const AddressNavigation = styled.button`
  cursor: pointer;
  background: none;

  border-radius: 7px;
  font-size: 30px;
  border: none;
  padding-left: 15px;
  padding-right: 15px;

  color: aliceblue;
`;
function Address() {
  return (
    <Addresss>
      Your Address : 751030 Ankit Sharma,Iter College Soa university get it by
      Day After Tommorow
      <AddressNavigation>▼▽</AddressNavigation>
    </Addresss>
  );
}

export default Address;
