// import styled from "styled-components";
// import BoxCategoryAbouts from "./BoxCategoryAbouts";
// import BoxCopyRights from "./BoxCopyRights";

// /* MAIN FOOTER WRAPPER */
// const FooterWrapper = styled.footer`
//   width: 100%;
//   ${'' /* height:60%; */}
//   background: #696964;

//   ${'' /* padding: 3rem 1rem 1rem; */}
//    padding: 2rem 1rem;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;

//   position: relative;
// `;

// /* INNER CONTENT CONTAINER */
// const FooterContent = styled.div`
//   width: 100%;
//   max-width: 1500px;
//   margin: 0 auto;
// `;

// function Footer() {
//   return (
//     <FooterWrapper>
//       <FooterContent>
//         <BoxCategoryAbouts />
//       </FooterContent>
//       <BoxCopyRights />
//     </FooterWrapper>
//   );
// }

// export default Footer;
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { SiSnapchat } from "react-icons/si";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* MAIN FOOTER */
const FooterWrapper = styled.footer`
  width: 100%;
  background: #1e1e1e;
  color: white;
  padding: 4rem 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;       /* Center everything horizontally */
  justify-content: center;   /* Center vertically */
  text-align: center;

  animation: fadeUp 0.6s ease;

  @keyframes fadeUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;

/* GRID LAYOUT */
const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  width: 100%;
  max-width: 1300px;
  justify-items: center;  /* CENTER GRID ITEMS */
  align-items: start;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

/* COLUMN BLOCK */
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  text-align: center; /* Center text inside */

  h3 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    color: #f0c27b;
  }
`;

/* LINKS */
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #dcdcdc;
  transition: 0.25s;

  &:hover {
    color: #f0c27b;
    transform: translateY(-3px);  /* smooth hover */
  }
`;

/* ABOUT SECTION */
const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;      /* Center */
  justify-content: center;
  text-align: center;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 2px solid #f0c27b;
    object-fit: cover;
  }

  p {
    font-size: 1.1rem;
    opacity: 0.85;
    line-height: 1.6;
    max-width: 320px;
  }
`;

/* NEWSLETTER */
const NewsletterWrapper = styled.div`
  display: flex;
  margin-top: 1rem;

  input {
    width: 260px;
    height: 48px;
    padding: 0 1rem;
    border-radius: 10px 0 0 10px;
    border: none;
    outline: none;
    font-size: 1rem;
  }

  button {
    width: 50px;
    background: #f0c27b;
    border-radius: 0 10px 10px 0;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    color: #1e1e1e;
    transition: 0.3s;

    &:hover {
      background: #d9a863;
    }
  }
`;

/* SOCIAL ICONS */
const SocialRow = styled.div`
  display: flex;
  justify-content: center; /* center icons */
  gap: 1.2rem;
  margin-top: 1rem;

  a {
    font-size: 1.8rem;
    color: white;
    transition: 0.3s;

    &:hover {
      color: #f0c27b;
      transform: scale(1.15);
    }
  }
`;

/* COPYRIGHT */
const CopyRight = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 1rem;
  opacity: 0.65;
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
`;

export default function Footer() {
  return (
    <FooterWrapper>

      <FooterGrid>

        <Column>
          <h3>COFFEE</h3>
          <StyledNavLink to="/shopping">Brew</StyledNavLink>
          <StyledNavLink to="/shopping">Instant</StyledNavLink>
          <StyledNavLink to="/shopping">Hot Coffee</StyledNavLink>
          <StyledNavLink to="/shopping">Flavour</StyledNavLink>
          <StyledNavLink to="/shopping">Fresh</StyledNavLink>
          <StyledNavLink to="/shopping">Pure Beans</StyledNavLink>
          <StyledNavLink to="/shopping">Classic</StyledNavLink>
          <StyledNavLink to="/shopping">Arabica</StyledNavLink>
        </Column>

        <Column>
          <h3>ASSAVA</h3>
          <StyledNavLink to="/shopping">New Arrival</StyledNavLink>
          <StyledNavLink to="/shopping">Libercia</StyledNavLink>
          <StyledNavLink to="/shopping">Excelsa</StyledNavLink>
          <StyledNavLink to="/shopping">Day Coffee</StyledNavLink>
          <StyledNavLink to="/shopping">Night Coffee</StyledNavLink>
          <StyledNavLink to="/shopping">Robusta</StyledNavLink>
        </Column>

        <Column>
          <h3>ABOUT</h3>
          <StyledNavLink to="/about">How We Started</StyledNavLink>
          <StyledNavLink to="/about">Co-founder</StyledNavLink>
          <StyledNavLink to="/about">Investor</StyledNavLink>
          <StyledNavLink to="/about">Privacy</StyledNavLink>
          <StyledNavLink to="/about">Bulk Sales</StyledNavLink>
          <StyledNavLink to="/about">Terms & Conditions</StyledNavLink>
        </Column>

        <AboutSection>
          <img src="logoassavas01.jpg" alt="ASSAVA" />
          <p>
            What began as a small idea between friends has grown into something
            magical — powered by passion and a love for coffee.
          </p>

          <NewsletterWrapper>
            <input type="text" placeholder="Subscribe" />
            <button><FaCircleArrowRight /></button>
          </NewsletterWrapper>

          <SocialRow>
            <NavLink to="https://www.instagram.com/oxitasm/" target="_blank"><CgInstagram /></NavLink>
            <NavLink to="https://x.com/ankit_sharma708" target="_blank"><BsTwitterX /></NavLink>
            <NavLink to="https://facebook.com" target="_blank"><ImFacebook2 /></NavLink>
            <NavLink to="https://youtube.com" target="_blank"><BsYoutube /></NavLink>
            <NavLink to="https://snapchat.com" target="_blank"><SiSnapchat /></NavLink>
          </SocialRow>
        </AboutSection>

      </FooterGrid>

      <CopyRight>© 2025 ASSAVA. All Rights Reserved.</CopyRight>
    </FooterWrapper>
  );
}
