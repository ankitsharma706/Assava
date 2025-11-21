// import styled from "styled-components";

// const Section = styled.section`
//   width: 100%;
//   padding: 4rem 1rem;
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
// `;

// /* --- FIRST BLOCK --- */
// const BlockRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2rem;
//   flex-wrap: wrap;

//   @media (max-width: 900px) {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// const ImageWrap = styled.div`
//   flex: 1;
//   width: 100%;

//   img {
//     width: 100%;
//     height: auto;              /* Keep natural aspect ratio */
//     border-radius: 12px;
//     object-fit: cover;         /* Crop neatly, no stretch */
//     aspect-ratio: 4 / 5;       /* Perfect coffee-card ratio */
//   }
// `;


// const Description = styled.div`
//   flex: 1;
//    background: linear-gradient(
//   to right,
//   #4a2e05,
//   #bc8c2a,
//   #4a2e05
// );
//   color: white;
//   border-radius: 12px;
//   padding: 2.5rem;
//   font-size: 1.2rem;
//   line-height: 1.6;

//   h2 {
//     margin-bottom: 1rem;
//   }
// `;

// /* --- SECOND BLOCK (REVERSE LAYOUT) --- */
// const BlockRowReverse = styled(BlockRow)`
//   flex-direction: row-reverse;

//   @media (max-width: 900px) {
//     flex-direction: column;
//   }
// `;

// /* --- THIRD BLOCK (ICONS + STORY) --- */

// const IconRow = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 2rem;
//   flex-wrap: wrap;

//   img {
//     width: 120px;
//     height: 140px;
//     border-radius: 8px;
//     object-fit: cover;
//   }
// `;

// const StoryBox = styled.div`
//   ${'' /* background: #6d6b6b; */}
//    background: linear-gradient(
//   to right,
//   #4a2e05,
//   #bc8c2a,
//   #4a2e05
// );
//   color: white;
//   border-radius: 12px;
//   padding: 2.5rem;
//   margin-top: 2rem;
//   font-size: 1.2rem;
//   line-height: 1.7;
//   width: 100%;
//   max-width: 900px;
//   margin-inline: auto;

//   @media (max-width: 700px) {
//     padding: 1.5rem;
//   }
// `;

// /* --- COMPONENT --- */

// function About() {
//   return (
//     <Section>

//       {/* FIRST BLOCK */}
//       <BlockRow>
//         <ImageWrap>
//           <img src="/cup.jpg" alt="cup of coffee" />
//         </ImageWrap>

//         <Description>
//           <h2>☕ Welcome to ASSAVA</h2>
//           Where every cup tells a story, and every sip feels like home. Nestled
//           in the heart of our community, ASSAVA began as a small passion project
//           between friends, rooted in the belief that coffee is more than a
//           beverage — it's a shared experience.
//           <br /><br />
//           Our range of carefully crafted brews — from bold classics to aromatic
//           blends — is made to bring people together. Whether you're savoring a
//           quiet moment or catching up with loved ones, ASSAVA is your warm
//           corner of calm in a busy world.
//         </Description>
//       </BlockRow>

//       {/* SECOND BLOCK */}
//       <BlockRowReverse>
//         <ImageWrap>
//           <img src="/about-image.jpg" alt="coffee beans" />
//         </ImageWrap>

//         <Description>
//           <h2>🌱 A Legacy of Passion</h2>
//           Founded with a single idea and a lot of heart, ASSAVA has grown
//           through dedication, curiosity, and a love for flavor. What started at
//           a kitchen table now reaches coffee lovers far and wide — but it still
//           feels just as personal.
//           <br /><br />
//           Here, you’re not just a customer. You’re part of a story that values
//           care, community, and quality in every batch.
//         </Description>
//       </BlockRowReverse>

//       {/* THIRD BLOCK */}
//       <div>
//         <IconRow>
//           <img src="/img1.png" alt="ai icon" />
//           <img src="/img1.png" alt="ai icon" />
//           <img src="/img1.png" alt="ai icon" />
//         </IconRow>

//         <StoryBox>
//           Once upon a time, there were three close friends — Arjun, Bala, and
//           Cyrus — who met every evening at their favorite local café. They were
//           inseparable, but there was just one problem: they were all broke
//           college students, and could afford only one cup of coffee between the
//           three of them.
//           <br /><br />
//           Rather than argue over who would drink it, they came up with a
//           tradition: Arjun would take the first sip because he had early morning
//           classes. Bala, always the storyteller, would hold the cup and chat
//           while taking small sips. Cyrus, the philosopher, finished the last
//           drop — saying it tasted best after soaking in the wisdom of
//           friendship.
//         </StoryBox>
//       </div>

//     </Section>
//   );
// }

// export default About;
import styled from "styled-components";

/* MAIN SECTION */
const Section = styled.section`
  width: 100%;
  padding: 4rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;           /* Center all child blocks */
  gap: 4rem;
`;

/* BLOCK ROW */
/* BLOCK ROW — No Gap Between Image & Description */
const BlockRow = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: stretch;
  justify-content: center;

  gap: 0;                /* <-- removes space */
  margin: 0;            /* <-- no margin */

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/* IMAGE SIDE */
const ImageWrap = styled.div`
  flex: 1;
  min-width: 280px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px 0 0 12px; /* smoothly connects with description box */
  }

  @media (max-width: 900px) {
    img {
      border-radius: 12px 12px 0 0; /* full rounded on mobile */
    }
  }
`;

/* DESCRIPTION SIDE */
const Description = styled.div`
  flex: 1;
  min-width: 280px;

  background: linear-gradient(to right, #4a2e05, #bc8c2a, #4a2e05);
  color: white;

  padding: 2.5rem;
  border-radius: 0 12px 12px 0;    /* Connected edge */

  font-size: 1.2rem;
  text-align: center;
  line-height: 1.7;

  @media (max-width: 900px) {
    border-radius: 0 0 12px 12px;
  }
`;

/* REVERSE BLOCK ROW */
const BlockRowReverse = styled(BlockRow)`
  flex-direction: row-reverse;
  gap:-0rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  img{
    border-radius:0 12px 12px 0 ;
  }
`;

/* ICON ROW */
const IconRow = styled.div`
  width: 100%;
  max-width: 900px;

  display: flex;
  justify-content: center;  
  align-items: center;
  gap: 2rem;

  flex-wrap: wrap;

  img {
    width: 120px;
    height: 140px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

/* STORY BOX */
const StoryBox = styled.div`
  background: linear-gradient(to right, #4a2e05, #bc8c2a, #4a2e05);
  color: white;
  border-radius: 12px;

  width: 100%;
  max-width: 900px;

  padding: 2.5rem;
  margin-top: 2rem;

  font-size: 1.2rem;
  line-height: 1.7;

  text-align: center;             /* Centered story text */

  @media (max-width: 700px) {
    padding: 1.5rem;
  }
`;

function About() {
  return (
    <Section>

      {/* FIRST BLOCK */}
      <BlockRow>
        <ImageWrap>
          <img src="/cup.jpg" alt="cup of coffee" />
        </ImageWrap>

        <Description>
          <h2>☕ Welcome to ASSAVA</h2>
          Where every cup tells a story, and every sip feels like home.
          <br />
          Our brews are crafted to bring people together — whether in a quiet
          moment or with loved ones. Born from a passion for connection and craftsmanship, ASSAVA began as a dream to create more than just coffee — we wanted to build a community.
          A smooth, medium roast that greets you like an old friend. Notes of caramel and honey dance on your palate, perfect for starting your day with warmth and comfort.
          A deep, rich blend for those reflective moments. Dark chocolate and subtle spice create a symphony of flavors that linger long after the last sip.
          Light and bright, this blonde roast captures the magic of possibility. Citrus and floral notes remind you that every moment is a fresh start.
          Our boldest blend, crafted for storytellers and dreamers. Smoky undertones and a velvety finish make every cup feel like a cozy conversation with an old friend.
          
        </Description>
      </BlockRow>

      {/* SECOND BLOCK */}
      <BlockRowReverse>
        <ImageWrap>
          <img src="/about-image.jpg" alt="coffee beans" />
        </ImageWrap>

        <Description>
          <h2>🌱 A Legacy of Passion</h2>
          What began as a small idea among friends now reaches coffee lovers
          everywhere — but still feels personal.At ASSAVA, we believe in doing good — one cup at a time.
          We partner directly with farmers who share our values of sustainability and fair trade. We roast in small batches to honor the craft. And we pour every cup with the intention of creating connection, comfort, and community.
          Because coffee isn't just a drink. It's a ritual. A pause. A moment to breathe and be present.
          Your perfect cup is waiting. Come find your favorite spot, settle in, and let us share our passion for exceptional coffee with you.

          Whether you're here for the quiet morning ritual or the lively afternoon catch-up, ASSAVA is your place to belong.

        </Description>
      </BlockRowReverse>

      {/* THIRD BLOCK */}
      <IconRow>
        <img src="/img1.png" alt="" />
        <img src="/img1.png" alt="" />
        <img src="/img1.png" alt="" />
      </IconRow>

      <StoryBox>
        Once upon a time, three close friends — Arjun, Bala, and Cyrus — shared
        one coffee every evening during college...
        <br /><br />
        That single cup became a tradition, a memory, and the beginning of
        ASSAVA.
      </StoryBox>
    </Section>
  );
}

export default About;
