import styled from "styled-components";
import AirportItem from "./AirportItem";

const StyledAirports = styled.div`
  & {
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    padding-top: var(--margin-top-fix);
    height: 100vh;
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

function Airports() {
  return (
    <StyledAirports>
      <AirportItem />
    </StyledAirports>
  );
}

export default Airports;
