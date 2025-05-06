import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Boxes = styled.div`
  /* height: 100%; */
  width: 100%;
  background: none;
  /* align-self: center; */
  /* align-content: center; */
  /* margin-left: 520px; */
  border-radius: 8px;
  /* display: flex; */
`;
const Boxes1 = styled.div`
  height: 300px;
  width: 60%;
  /* padding-left: 70px; */
  padding-top: 40px;
  padding: 70px;
  background: #666666;
  align-self: center;
  color: aliceblue;
  align-content: center;
  font-size: xx-large;
 & h1 {
    text-align: center;
  }
  margin-top: 160px;
  margin-left: 320px;
  border-radius: 8px;
  /* display: flex; */
`;
const Boxes2 = styled.div`
  height: 100px;
  width: 700px;
  background: #5e5d5e;
  align-self: center;
  align-content: center;
  margin-left: 620px;
  margin-top: 60px;
  margin-bottom: 160px;
  border-radius: 8px;
  /* display: flex; */
 
`;
const NavListFilter = styled.ul`
  gap: 3.3rem;
  display: flex;
  list-style: none;
  justify-content: space-between;
  font-size: 32px;
  & select {
    border: none;
    font-size: 20px;
    background: #7a7a7a;
    color: aliceblue;
    padding: 15px;
    margin-top: 25px;
    margin-right: 25px;
    border-radius: 5px;
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
      border: none;
    }
  }
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    margin: 5px;
    display: flex;

    text-decoration: none;
    color: aliceblue;

    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    transition: all 0.3s;
    cursor: pointer;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    /* color: #c9e6ff; */
  }
`;

function ThankYouPage() {
  return (
    <Boxes>
      <Boxes1>
        <h1> ☕️ Thank You for Your Order!</h1> We're brewing something special
        just for you. Your order has been received and is now being processed.
        We truly appreciate your choice — you've made a great one! You’ll
        receive your tracking details within 2 hours via website. with your
        order details shortly. In the meantime, sit back, relax, and get ready
        to enjoy a cup of something truly satisfying.
      </Boxes1>
      <Boxes2>
        <nav>
          <NavListFilter>
            <li>
              <StyledNavLink to="/home">
                <span>Home</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/tracking">
                <span>Track Your Orders</span>
              </StyledNavLink>
            </li>
          </NavListFilter>
        </nav>
      </Boxes2>
    </Boxes>
  );
}

export default ThankYouPage;
