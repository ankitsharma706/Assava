import styled from "styled-components";

const Franchasise = styled.div`
  height: 950px;
  width: 100%;
  /* background: #25ff08; */
 & img{
  border-radius: 1px;
  object-fit: fill;
 }
`;
function Franchasises() {
  return (
    <Franchasise>
    <img src="franc00.jpg" alt="home" height={950} width="100%" />
    {/* <img src="franc01.jpg" alt="home" height={950} width="100%" /> */}
    {/* <img src="franc02.jpg" alt="home" height={950} width="100%" /> */}
    {/* <img src="franc03.jpg" alt="home" height={950} width="100%" /> */}
    {/* <img src="franc04.png" alt="home" height={950} width="100%" /> */}
  </Franchasise>
  )
}

export default Franchasises
