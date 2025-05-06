import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ImFacebook, ImFacebook2 } from "react-icons/im";
import { SiSnapchat } from "react-icons/si";


const StyledNavLinkSocial = styled(NavLink)`
  &:link,
  &:visited {
    /* margin: 5px; */
    padding-top: 5px;
    align-items: center;
    display: block;
    text-decoration: none;
    color: aliceblue;
    font-size: 2rem;
    font-weight: 500;
    /* padding: 1.2rem 1.2rem; */
    padding-left: 1.2rem;
    padding-top: 1rem;
    padding-right: 1.2rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #9dd1fd;
  }
`;
const StyledInput = styled.input`
  border: none;
  width: 70%;
  height: 50px;
  font-size: 20px;
  border-radius: 10px 0 0 10px;
  text-align: center;
  /* text-transform: capitalize; */
  outline: none;
  
`;
const SubscribeBox = styled.button`
  background: #968383;
  width: 100px;
  height: 50px;
  border-radius: 0 10px 10px 0;
  border: none;
  color: #000000;
  font-size: 36px;
  padding-top: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #7a6b6b;
  }
`;

const BoxAbout = styled.ul`
  margin-top: 40px;
  height: 430px;
  width: 400px;
  /* background: #ac208d; */
  display: flex;
  flex-direction: column;
  list-style: none;
`;
const Logo = styled.div`
  /* background: #1c7ab1; */
  /* padding-top: 8px; */
  height: 140px;
  width: 70%;
  align-self: center;
  text-align: center;
  font-size: x-large;
  color: aliceblue;
  & img{
    border-radius: 50%;
  }
`;
const Description = styled.div`
  /* background: #c96a33; */
  margin-top: 8px;
  margin-left: 14px;
  /* text-align: center; */
  font-size: x-large;
  /* margin: 2px; */
  color: aliceblue;
`;
const SocialMedia = styled.div`
  /* background: #338044; */
  height: 60px;
  width: 70%;
  display: flex;

  align-self: left;

  color: aliceblue;
  margin-top: 30px;
  margin-left: 10px;
`;
const IconList = styled.ul`
  display: flex;
  /* gap: 20px; */
  list-style: none;
  padding: 0;
  margin: 0;
`;

const IconItem = styled.li`
  font-size: 1.8rem;
`;
const NewsLatter = styled.div`
  /* background: #c9b233; */
  /* padding-top: 8px; */
  margin-top: 20px;
  height: 50px;
  width: 100%;
  display: flex;
  align-self: center;
  justify-content: center;
  /* margin-left: 10px; */
  text-align: center;
  font-size: x-large;
  color: aliceblue;
`;

function BoxAbouts() {
  return (
    <BoxAbout>
    <Logo>
      <img src="logoassavas01.jpg" alt="logo" height={130} width={170} />
    </Logo>
    <Description>
      What started as a small idea over coffee with a friend has grown
      into something meaningful — fueled by passion, friendship, and a
      love for sharing
    </Description>
    <NewsLatter>
      <StyledInput type="text" placeholder="Subscribe for NewsLetter" />
      <SubscribeBox>
        <FaCircleArrowRight />
      </SubscribeBox>
    </NewsLatter>
    <SocialMedia>
      <nav aria-label="Social media">
        <IconList>
          <IconItem>
            <StyledNavLinkSocial to="https://www.instagram.com/oxitasm/">
              <CgInstagram />
            </StyledNavLinkSocial>
          </IconItem>
          <IconItem>
            <StyledNavLinkSocial to="https://x.com/ankit_sharma708">
              <BsTwitterX />
            </StyledNavLinkSocial>
          </IconItem>
          <IconItem>
            <StyledNavLinkSocial to="/cart">
              <ImFacebook2 />
            </StyledNavLinkSocial>
          </IconItem>
          <IconItem>
            <StyledNavLinkSocial to="/cart">
              <BsYoutube />
            </StyledNavLinkSocial>
          </IconItem>
          <IconItem>
            <StyledNavLinkSocial to="/cart">
              <SiSnapchat />
            </StyledNavLinkSocial>
          </IconItem>
        </IconList>
      </nav>
    </SocialMedia>
  </BoxAbout>
  )
}

export default BoxAbouts
