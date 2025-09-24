import styled from "styled-components";

const StatTrack = styled.div`
  height: 100px;
  width: 90%;
  margin: 5px 20px 9px 16px;
  border-radius: 10px;
  padding: 10px;
  background: #707070FF;
`;
const DelStatus = styled.div`
  /* height: 60px; */
  margin-top: 10px;
  font-size: 25px;
  /* background: #000; */
  padding-left: 30px;

  /* width: 96%; */
`;
const DelvAdd = styled.div`
  /* height: 60px; */
  /* margin-top: 10px; */
  font-size: 23px;
  /* background: #000; */
  padding-left: 30px;

  /* width: 96%; */
`;
const TimeAndDate = styled.div`
  /* height: 60px; */
  /* margin-top: 10px; */
  font-size: 20px;
  display: flex;
  gap: 1rem;

  padding-left: 30px;
`;
const Time = styled.div``;
const Date = styled.div``;
function StatusTrack() {
  return (
    <StatTrack>
              <DelStatus>Deliiverd to consignee</DelStatus>
              <DelvAdd>Delivered Address</DelvAdd>
              <TimeAndDate>
                <Time>Time</Time> On
                <Date>Date</Date>
              </TimeAndDate>
            </StatTrack>
  )
}

export default StatusTrack
