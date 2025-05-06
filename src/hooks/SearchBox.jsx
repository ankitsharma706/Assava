import styled from "styled-components";
import RecommendedBox from "../features/shopping/RecommendedBox";
import Row from "../ui/Row";

const Boxes = styled.div`
  height: auto;
  width: 1000px;
  background: #b9b8b8;
  /* position: relative; */
  /* align-self: center; */
  /* align-content: center; */
  margin-left: 520px;
  border-radius: 8px;
`;
const SearchBar = styled.div`
  height: 80px;
  width: 900px;
  background: #dddddd;
  display: flex;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 8px;
`;
const PopularSearch = styled.div`
  height: 300px;
  width: 900px;
  background: #949494;
  display: block;
  margin-left: 40px;
  margin-top: 20px;
  border-radius: 8px;
`;
const YourResult = styled.div`
  height: 300px;
  width: 900px;
  background: #949494;
  display: block;
  margin-left: 40px;
  margin-top: 20px;
  border-radius: 8px;
`;
const PopularSearchName = styled.div`
  font-size: 43px;
  width: 100%;
  height: 70px;
  color: aliceblue;
  text-align: center;
  /* align-self: center; */
  background: #745d5d;
`;
const SearchBarBox = styled.button`
  font-size: 33px;
  margin: 5px;
  border-radius: 20px;
  height: 40px;
  width: 100px;
  border: none;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  /* height: 70px; */
  color: aliceblue;
  text-align: center;
  /* align-self: center; */
  background: #7c7c7c;
`;
const StyledInput = styled.input`
  border: none;
  color: #ffffff;
  width: 100%;
  height: 80px;
  background: #cacaca;
  /* padding: 8px; */
  font-size: 46px;
  text-align: center;
  border-radius: 10px;
  text-transform: capitalize;
`;
const CheckOutButton = styled.button`
  /* height: 100px;
  width: 50%;*/
  cursor: pointer;
  background: none;

  border-radius: 7px;
  font-size: 30px;
  border: none;
  padding-left: 15px;
  margin-top: 16px;
  padding-right: 15px;
  /* padding-top: 40px; */
  color: aliceblue;
`;
function SearchBox({closeModal}) {
  return (
    <Boxes>
      <SearchBar>
        <a href="/home" >
          <CheckOutButton onClick={closeModal}> ← </CheckOutButton>
        </a>
        <StyledInput type="text" placeholder="Search for coffee" />
      </SearchBar>
      <PopularSearch>
        <PopularSearchName>Popular Search</PopularSearchName>
        <Row>
          <SearchBarBox>elachi</SearchBarBox>
          <SearchBarBox>lemon</SearchBarBox>
          <SearchBarBox>spices</SearchBarBox>
          <SearchBarBox>elachi</SearchBarBox>
          <SearchBarBox>lemon</SearchBarBox>
          <SearchBarBox>spices</SearchBarBox>
        </Row>
      </PopularSearch>
      <YourResult>
        <PopularSearchName>Your Results</PopularSearchName>
      </YourResult>
      <RecommendedBox />
    </Boxes>
  );
}

export default SearchBox;
