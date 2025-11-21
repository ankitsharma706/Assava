import { Link } from "react-router-dom";
import styled from "styled-components";
import RecommendedBox from "../features/shopping/RecommendedBox";
import Row from "../ui/Row";

/* MAIN WRAPPER (CENTERED + RESPONSIVE) */
const Wrapper = styled.div`
  width: 100%;
  max-width: 650px;          /* FIXED WIDTH FOR CENTERED MODAL */
  margin: 0 auto;
  ${'' /* background: #b9b8b8; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
 gap: 1.2rem;


  @media (max-width: 600px) {
    padding: 1rem;
    gap: 1.2rem;
  }
`;


/* SEARCH BAR */
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  ${'' /* background: #dddddd; */} background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 10px;
  padding: 0.5rem 1rem;
`;

/* BACK BUTTON */
const BackButton = styled(Link)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  padding: 0.4rem 0.8rem;
  ${'' /* background: white; */}
  color: #ffffffff;
  border: none;
  text-decoration: none;
  cursor: pointer;
`;

/* INPUT */
const StyledInput = styled.input`
  width: 100%;
  border: none;

  background: linear-gradient(
    to right,
    #4a2e05,
    #bc8c2a,
    #4a2e05
  );
  color: white;

  padding: 0.8rem 1rem;
  border-radius: 10px;
  font-size: 1.4rem;
  outline: none;

  /* When user clicks or types */
  &:focus,
  &:active {
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  }

  /* Placeholder color */
  &::placeholder {
    color: #ffffffff;
  }


  padding: 0.8rem 1rem;
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  border-radius: 8px;
  outline: none;
  margin-left: 1rem;
`;

/* SECTION BOX */
const SectionBox = styled.div`
  ${'' /* background: #949494; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border-radius: 10px;
  padding: 1rem;
`;

/* SECTION TITLE */
const SectionTitle = styled.div`
  ${'' /* background: #745d5d; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 0.8rem;
  border-radius: 8px;
  color: white;
  font-size: clamp(1.4rem, 4vw, 2rem);
  text-align: center;
  margin-bottom: 1rem;
`;

/* CATEGORY BUTTON */
const TagButton = styled.button`
  padding: 0.4rem 0.8rem;
  ${'' /* background: #7c7c7c; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  cursor: pointer;
  margin: 0.4rem;

  &:hover {
    opacity: 0.85;
  }
`;

function SearchBox({ closeModal }) {
  return (
    <Wrapper>
      <SearchBar>
        <BackButton to="/home" onClick={closeModal}>
          ←
        </BackButton>
        <StyledInput type="text" placeholder="Search for coffee..." />
      </SearchBar>

      <SectionBox>
        <SectionTitle>Popular Search</SectionTitle>

        <Row style={{ flexWrap: "wrap", gap: "0.5rem" }}>
          <TagButton>Elachi</TagButton>
          <TagButton>Lemon</TagButton>
          <TagButton>Spices</TagButton>
          <TagButton>Instant</TagButton>
          <TagButton>Brew</TagButton>
          {/* <TagButton>Arabica</TagButton> */}
        </Row>
      </SectionBox>

      <SectionBox>
        <SectionTitle>Your Results</SectionTitle>
      </SectionBox>

      <RecommendedBox compact />

    </Wrapper>
  );
}

export default SearchBox;
