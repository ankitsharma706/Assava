import styled from "styled-components";

const Box1 = styled.div`
  height: 800px;
  width: 100%;
  background: #979797;
  color: aliceblue;
  display: flex;
  margin-top: 30px;
`;
const Box2 = styled.div`
  margin-top: 40px;
  height: 800px;
  width: 100%;
  display: flex;
  /* background: #22ca7c; */
  /* column-count: 2; */
`;
const Box3 = styled.div`
  height: 900px;
  width: 100%;
  /* background: #da721d; */
  /* column-count: 2; */
`;
const FigureBox = styled.div`
  height: 800px;
  width: 50%;
  /* background: #7800da; */
  /* column-count: 2; */
`;
const Description1 = styled.div`
  height: 436px;
  width: 30%;
  background: #6d6b6b;
  /* column-count: 2; */
  font-size: x-large;
  /* justify-self: center; */
  border-radius: 10px;
  color: aliceblue;
  float: right;
  margin-top: 120px;
  margin-right: 220px;
  margin-left: 20px;
  gap: 1.2rem;

  padding: 4rem;
`;
const Description3 = styled.div`
  height: 236px;
  width: 80%;
  background: #6d6b6b;
  border-radius: 10px;
  font-size: x-large;
  color: aliceblue;
 
  margin-left: 100px;

  gap: 1.2rem;

  padding: 4rem;
`;
const Description2 = styled.div`
  height: 436px;
  width: 30%;
  background: #6d6b6b;
  border-radius: 10px;
  font-size: x-large;
  color: aliceblue;
  float: left;
  margin-top: 120px;
  margin-left: 200px;
  /* margin-right: 20px; */
  gap: 1.2rem;

  padding: 4rem;
`;

const Box31 = styled.div`
  height: 300px;
  width: 80%;
  /* background: #b826b8; */
  color: aliceblue;
  display: flex;
  margin-top: 130px;

  justify-self: center;
`;
const Box32 = styled.div`
  justify-self: center;
  height: 300px;
  width: 80%;
  /* background: #5fe023; */
  color: aliceblue;
  display: flex;
  margin-top: 80px;
`;
const ImageBox1 = styled.div`
  height: 140px;
  width: 120px;
  /* background: #5fe023; */
  color: aliceblue;
  align-self: center;
  display: flex;
  margin-top: 30px;
  margin-left: 500px;
  /* left: -130px; */
  /* rotate: 330deg; */
  border-radius: 5px;
`;
const ImageBox2 = styled.div`
  border-radius: 5px;

  height: 140px;
  width: 120px;
  /* background: #ffa51e; */
  color: aliceblue;
  display: flex;
  margin-top: 30px;
  margin-left: 90px;
  margin-right: 90px;
`;
const ImageBox3 = styled.div`
  /* rotate: 30deg; */
  border-radius: 5px;

  align-self: center;
  height: 140px;
  width: 120px;
  /* background: #6e0dec; */
  color: aliceblue;
  display: flex;
  margin-top: 30px;
`;

function About() {
  return (
    <>
      <Box1>
        <FigureBox>
          <img src="/cup.jpg" alt="cup" height={800} width={1000} />
        </FigureBox>
        <Description1>
          <h2> ☕ Welcome to ASSAVA</h2>
          Where every cup tells a story, and every sip feels like home. Nestled
          in the heart of our community, ASSAVA began as a small passion project
          between friends, rooted in the belief that coffee is more than a
          beverage — it's a shared experience. Our range of carefully crafted
          brews — from bold classics to aromatic blends — is made to bring
          people together. Whether you're savoring a quiet moment or catching up
          with loved ones, ASSAVA is your warm corner of calm in a busy world.
          But it’s not just about what’s in the cup. It’s about the values
          behind it — authenticity, simplicity, and the joy of real connection
        </Description1>
      </Box1>
      <Box2>
        <Description2>
          <h2>🌱 A Legacy of Passion</h2> Founded with a single idea and a lot
          of heart, ASSAVA has grown through dedication, curiosity, and a love
          for flavor. What started at a kitchen table now reaches coffee lovers
          far and wide — but it still feels just as personal. Here, you’re not
          just a customer. You’re part of a story that values care, community,
          and quality in every batch. So come take a seat, grab your favorite
          blend, and stay a while. This is coffee, the ASSAVA way — pure,
          honest, and brewed to bring us closer.
        </Description2>
        <FigureBox>
          <img src="about-image.jpg" alt="coffee" height={800} width={1000} />
        </FigureBox>
      </Box2>
      <Box3>
        <Box31>
          <ImageBox1>
            <img src="img1.png" alt="ai" height={140} width={120} />
          </ImageBox1>
          <ImageBox2>
            <img src="img1.png" alt="ai" height={140} width={120} />
          </ImageBox2>
          <ImageBox3>
            <img src="img1.png" alt="ai" height={140} width={120} />
          </ImageBox3>
        </Box31>
        <Box32>
          <Description3>
            Once upon a time, there were three close friends — Arjun, Bala, and
            Cyrus — who met every evening at their favorite local café. They
            were inseparable, but there was just one problem: they were all
            broke college students, and could afford only one cup of coffee
            between the three of them. Rather than argue over who would drink
            it, they came up with a tradition: Arjun would take the first sip
            because he had early morning classes and needed the boost. Bala,
            always the chatterbox, would hold the cup and tell stories while
            taking small sips in between. Cyrus, the most philosophical, would
            finish the last drop, claiming the coffee tasted best when it had
            “soaked in the wisdom of friendship.”
          </Description3>
        </Box32>
      </Box3>
    </>
  );
}

export default About;
