import styled from "styled-components";

const CofDesciptionBox = styled.div`
  height: auto;
  width: 100%;
  background: #9c9b9b;
`;
const CofDescImg = styled.div`
  height: 700px;
  margin-top: 40px;
  width: 800px;
  /* background: #bb9311; */
  border-radius: 20px;
  & img {
    border-radius: 20px;
  }
`;
const CofDescDetails = styled.div`
  border-radius: 20px;
  margin-top: 40px;
  height: 700px;
  width: 800px;
  background: #858585;
`;
const Cofdesextbox = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* background: #b80b4d; */
`;
const CofTitle = styled.div`
  height: 90px;
  width: 100%;
  background: #a7a7a7;
  padding-top: 30px;
  font-size: 77px;
  padding-bottom: 10px;

  & span {
    margin-left: 50px;
  }
`;
const CofDescDetailsTitle = styled.div`
  height: 70px;
  width: 100%;
  /* background: #a7a7a7; */
  padding-top: 10px;
  font-size: 77px;
  padding-bottom: 10px;
  margin-top: 30px;

  & span {
    margin-top: 10px;
    margin-left: 50px;
  }
`;
const CofDescDetailsDesc = styled.div`
  height: 400px;
  margin-top: 60px;
  width: 80%;
  /* background: #ff4545; */
  padding-top: 30px;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 30px;
  padding-bottom: 10px;

  margin-left: 20px;
`;
function CoffeeDescBox() {
  return (
    <CofDesciptionBox>
        <CofTitle>
          <span>Coffee Description</span>
        </CofTitle>
        <Cofdesextbox>
          <CofDescImg>
            <img src="coffee02.jpg" alt="02" height={700} width={800} />
          </CofDescImg>

          <CofDescDetails>
            <CofDescDetailsTitle>
              <span>Pure Arabica</span>
            </CofDescDetailsTitle>
            <CofDescDetailsDesc>
              <span>
                Sourced from the misty slopes of Chandragiri Hills, this 100%
                Arabica offers a smooth, medium-bodied flavor with floral notes
                and a subtle hint of citrus. Handpicked and sun-dried, it
                delivers a clean, refined cup.
              </span>
            </CofDescDetailsDesc>
          </CofDescDetails>
        </Cofdesextbox>
        <Cofdesextbox>
          <CofDescDetails>
            <CofDescDetailsTitle>
              <span>Sun-Kissed Robusta</span>
            </CofDescDetailsTitle>
            <CofDescDetailsDesc>
              <span>
                Bold and intense, this Robusta is cultivated in the sun-drenched
                estates of Coorg. With a full-bodied profile and strong earthy
                tones, it’s ideal for espresso lovers looking for a powerful
                caffeine kick and a lingering chocolatey finish.
              </span>
            </CofDescDetailsDesc>
          </CofDescDetails>
          <CofDescImg>
            <img src="coffee03.jpg" alt="02" height={700} width={800} />
          </CofDescImg>
        </Cofdesextbox>
        <Cofdesextbox>
          <CofDescImg>
            <img src="coffee04.jpg" alt="02" height={700} width={800} />
          </CofDescImg>
          <CofDescDetails>
            <CofDescDetailsTitle>
              <span>Honey Processed Blend</span>
            </CofDescDetailsTitle>
            <CofDescDetailsDesc>
              <span>
                This unique blend from Araku Valley uses the honey processing
                method, where some fruit is left on the bean during drying. The
                result is a naturally sweet cup with notes of caramel, red
                berries, and a creamy mouthfeel that lingers gently.
              </span>
            </CofDescDetailsDesc>
          </CofDescDetails>
        </Cofdesextbox>
        <Cofdesextbox>
          <CofDescDetails>
            <CofDescDetailsTitle>
              <span>Shade-Grown Specialty</span>
            </CofDescDetailsTitle>
            <CofDescDetailsDesc>
              <span>
                Grown under a lush forest canopy in the Western Ghats, this
                coffee benefits from slow ripening and natural biodiversity.
                Expect a balanced cup with nutty undertones, mild acidity, and a
                hint of spice, reflecting its sustainable roots.
              </span>
            </CofDescDetailsDesc>
          </CofDescDetails>
          <CofDescImg>
            <img src="coffee05.jpg" alt="02" height={700} width={800} />
          </CofDescImg>
        </Cofdesextbox>
      </CofDesciptionBox>
  )
}

export default CoffeeDescBox
