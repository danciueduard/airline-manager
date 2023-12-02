import styled from "styled-components";

const StyledFlexItemContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 90%;
  background-color: #ffff;
  height: 6rem;
  font-size: 0.8rem;
  /* box-shadow: var(--shadow-md); */
  box-shadow: 0px 0rem 0.7rem rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius-lg);
  img {
    width: 9rem;
    height: auto;
    border-top-left-radius: var(--border-radius-lg);
    border-bottom-left-radius: var(--border-radius-lg);
  }

  .mid {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .end {
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    text-align: end;
    flex-grow: 1;
    padding-right: 1rem;
  }

  p,
  h3 {
    margin: 0;
  }
`;

function FleetItem({
  model,
  maxCapacity,
  maxRange,
  planeImg,
  status,
  condition,
}) {
  return (
    <StyledFlexItemContainer>
      <div>
        <img src={planeImg} alt={`Image of ${model}`} />
      </div>
      <div className="mid">
        <h3>{model}</h3>
        <p>Status: {status}</p>
        <p>
          Assigned Route: <br />
          %ICAO% to %ICAO%
        </p>
      </div>
      <div className="end">
        <p>Capacity: {maxCapacity} passengers</p>
        <p>Range: {maxRange} NM</p>
        <p>Condition: ${condition}</p>
      </div>
    </StyledFlexItemContainer>
  );
}

export default FleetItem;
