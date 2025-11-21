import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { ImFacebook2 } from "react-icons/im";
import { SiSnapchat } from "react-icons/si";
import { FaCircleArrowRight } from "react-icons/fa6";

/* MAIN BOX */
const Box = styled.div`
  background: #2f2f2f;
  border-radius: 12px;
  padding: 1.5rem 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;   /* ⭐ CENTER EVERYTHING */
  gap: 1rem;

  color: white;
  height: auto;
`;

/* LOGO */
const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

/* DESCRIPTION */
const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.55;
  opacity: 0.9;
  text-align: center;      /* ⭐ CENTER TEXT */
  max-width: 90%;
`;

/* NEWSLETTER WRAPPER */
const NewsletterWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 320px;         /* ⭐ Reduced width */
  margin-top: 0.2rem;
`;

/* INPUT */
const Input = styled.input`
  flex: 1;
  height: 44px;

  border: none;
  outline: none;

  font-size: 0.9rem;
  padding: 0 1rem;

  border-radius: 10px 0 0 10px;
  background: #f1f1f1;
`;

/* SUBSCRIBE BUTTON */
const SubscribeButton = styled.button`
  width: 60px;
  border: none;
  background: #d2b58b;
  color: #2f2f2f;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.3rem;
  border-radius: 0 10px 10px 0;
  cursor: pointer;

  &:hover {
    background: #b79c71;
  }
`;

/* SOCIAL MEDIA */
const SocialMedia = styled.div`
  margin-top: 0.5rem;
`;

const IconList = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled(NavLink)`
  font-size: 1.6rem;
  color: white;

  &:hover {
    color: #d2b58b;
  }
`;

function BoxAbouts() {
  return (
    <Box>

      <Logo>
        <img src="logoassavas01.jpg" alt="ASSAVA Logo" />
      </Logo>

      <Description>
        What started as a small idea over coffee with friends
        has grown into something meaningful — fueled by passion,
        creativity, and the joy of sharing great coffee.
      </Description>

      <NewsletterWrapper>
        <Input type="text" placeholder="Newsletter" />
        <SubscribeButton>
          <FaCircleArrowRight />
        </SubscribeButton>
      </NewsletterWrapper>

      <SocialMedia>
        <IconList>
          <Icon to="https://www.instagram.com/oxitasm/" target="_blank">
            <CgInstagram />
          </Icon>
          <Icon to="https://x.com/ankit_sharma708" target="_blank">
            <BsTwitterX />
          </Icon>
          <Icon to="https://facebook.com" target="_blank">
            <ImFacebook2 />
          </Icon>
          <Icon to="https://youtube.com" target="_blank">
            <BsYoutube />
          </Icon>
          <Icon to="https://snapchat.com" target="_blank">
            <SiSnapchat />
          </Icon>
        </IconList>
      </SocialMedia>

    </Box>
  );
}

export default BoxAbouts;
