import styled from "styled-components";

/* WRAPPER */
const StatusCard = styled.div`
  width: 100%;
  max-width: 900px;

  ${'' /* background: #707070; */}
   background: linear-gradient(
  to right,
  #4a2e05,
  #bc8c2a,
  #4a2e05
);
  padding: 1.2rem 1.5rem;
  margin: 1rem auto;

  border-radius: 12px;
  color: white;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-size: clamp(1rem, 2vw, 1.2rem);
`;

/* STATUS TITLE */
const StatusText = styled.div`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  font-weight: bold;
`;

/* ADDRESS */
const AddressText = styled.div`
  font-size: clamp(1rem, 2vw, 1.2rem);
  opacity: 0.9;
`;

/* TIME + DATE ROW */
const TimeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  opacity: 0.85;
`;

function StatusTrack() {
  return (
    <StatusCard>
      <StatusText>Delivered to Consignee</StatusText>

      <AddressText>Delivered Address</AddressText>

      <TimeRow>
        <div>Time:</div>
        <div>10:45 AM</div>
        <div>|</div>
        <div>Date:</div>
        <div>28 Jan 2025</div>
      </TimeRow>
    </StatusCard>
  );
}

export default StatusTrack;
