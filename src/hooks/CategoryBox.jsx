import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Boxes = styled.div`
  height: 500px;
  width: 850px;
  background-color: rgba(116, 116, 116, 0.2);
  background: #7e7d7d;
  /* align-self: center; */
  /* align-content: center; */
  position: relative;
  top: 82px;
  left: 92px;

  border-radius: 8px;
  display: flex;

  justify-content: space-around;
`;
const TitleTag = styled.div`
  /* background: #c9b233; */
  /* padding-top: 8px; */
  text-align: center;
  font-size: xx-large;
  margin-bottom: 1rem;
  color: aliceblue;
  /* margin: 2px; */
`;

const NavList = styled.ul`
  height: 400px;
  width: 250px;
  /* background: #3f22e0; */
  display: flex;
  text-align: left;
  flex-direction: column;
  list-style: none;
  /* padding: 1rem; */
  margin-top: 40px;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    /* margin: 5px; */
    padding-top: 5px;
    align-items: center;
    display: block;
    text-decoration: none;
    color: aliceblue;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
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
    /* color: #9dd1fd; */
  }
`;
const CategoryBox = forwardRef(({ closeModal }, ref) => {
  // const navigate = useNavigate();
 
  return (
    <Boxes ref={ref}>
      <nav aria-label="Product Categories">
        <NavList>
          <TitleTag>COFFEE</TitleTag>
          <li>
            <StyledNavLink
              // to="/shopping"
              onClick={(e) => {
                e.preventDefault();
                closeModal();
                setTimeout(() => {
                  window.location.href = "/shopping";
                }, 1);
              }}
            >
              Instant
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping" >
              Brew
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping" >
              Hot Coffee
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping" >
              Flavour
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping" >
              Roasted
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping" >
              Pure Beans
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/shopping" >
              Classic
            </StyledNavLink>
          </li>
          <li>
            {/* <div onClick={()=>handleClick("/shopping")}>Instant</div> */}
            <StyledNavLink to="/shopping" >
              Arabica
            </StyledNavLink>
          </li>
        </NavList>
      </nav>

      <nav aria-label="ASSAVA Categories">
        <NavList>
          <TitleTag>ASSAVA</TitleTag>
          <li>
            <StyledNavLink to="/orderHistory" >
              Your Order
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/orderHistory" >
              New-Arrival
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/orderHistory" >
              Libercia
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/orderHistory" >
              Excelsa
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/orderHistory" >
              Day Coffee
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/orderHistory" >
              Night Coffee
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/orderHistory" >
              Pure Beans
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/orderHistory" >
              Robusta
            </StyledNavLink>
          </li>
          {/* <li>
            <StyledNavLink to="/home">Arabica</StyledNavLink>
          </li> */}
        </NavList>
      </nav>

      <nav aria-label="About Categories">
        <NavList>
          <TitleTag>ABOUT</TitleTag>
          <li>
            <StyledNavLink to="/about" >
              How We Started
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about" >
              Co-founder
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about" >
              Investor
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about" >
              Privacy
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/about" >
              Bulk Sales
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about" >
              Terms & Condition
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </Boxes>
  );
});

export default CategoryBox;
