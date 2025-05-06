import styled from "styled-components";


const UserAvatar = styled.div`
  height: 150px;
  width: 420px;
  display: flex;
  /* background: #20ff32; */
`;
const Name = styled.div`
  height: 40px;
  width: 100%;
  color: aliceblue;
  font-size: 50px;
  margin-top: 40px;

  /* background: #bcff20; */
`;
const Logo = styled.div`
  height: 150px;
  width: 250px;
  margin-top: 10px;
  margin-left: 30px;
  border-radius: 50%;
  /* background-image: url("."); */
  & img{
    border-radius: 50%;
  }
`;
function UserAvatars() {
  return (
    <UserAvatar>
      
        <Logo>
          <a href="/home">
          <img src="logoassavas01.jpg" alt="logo" height={150} width={170}  />
          </a>
        </Logo>
        <Name>ASSAVA</Name>
      </UserAvatar>
  )
}

export default UserAvatars
