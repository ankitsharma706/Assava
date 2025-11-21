import styled from "styled-components";

const FranchiseSection = styled.section`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const FranchiseImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 700px;
  object-fit: cover;
  border-radius: 4px;

  @media (max-width: 768px) {
    max-height: 450px;
  }

  @media (max-width: 480px) {
    max-height: 350px;
  }
`;

function Franchasises() {
  return (
    <FranchiseSection>
      <FranchiseImage src="franc00.jpg" alt="Franchise Banner" />
    </FranchiseSection>
  );
}

export default Franchasises;
