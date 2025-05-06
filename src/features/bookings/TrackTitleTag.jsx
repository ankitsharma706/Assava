import styled from "styled-components";

const TrackTitleTags = styled.div`
  height: 200px;
  width: 100%;
  font-size: 75px;

  position: relative;

  align-items: center;
  align-self: center;
  align-content: center;
  background: #2cffa7;
`;
const TrackTitleTagNavigation = styled.button`
  cursor: pointer;
  font-size: 75px;
  border: none;
  background: none;
  color: aliceblue;
`;
const TrackTitleTagName = styled.div`
  height: 200px;
  width: 80%;
  align-content: center;
  margin-left: 300px;
  /* margin-top: 100px; */
  /* background: #c94c4c; */
`;
function TrackTitleTag() {
  return (
    <TrackTitleTags>
      <TrackTitleTagName>
        <a href="/orderHistory">
          <TrackTitleTagNavigation>←</TrackTitleTagNavigation>
        </a>
        My Orders
      </TrackTitleTagName>
    </TrackTitleTags>
  );
}

export default TrackTitleTag;
