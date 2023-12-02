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

  p {
    margin: 0;
  }
`;

function AirportItem() {
  return (
    <StyledFlexItemContainer>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg"
          alt={`Image of %CITY%`}
        />
      </div>
      <div>
        <h3>%NAME%</h3>
        <p>Code: %ICAO%</p>
        <p>Location: %LOCATION%</p>
      </div>
      <div>
        <p>Services</p>
        <p>Parking spot</p>
        <p>Routes</p>
      </div>
    </StyledFlexItemContainer>
  );
}

export default AirportItem;
