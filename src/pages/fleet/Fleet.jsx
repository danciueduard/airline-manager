import styled from "styled-components";
import FleetItem from "./FleetItem";
import { dummyFleet } from "../../dummyData";

const StyledFleetContainer = styled.div`
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

function Fleet() {
  return (
    <StyledFleetContainer>
      {dummyFleet.map((airplane) => (
        <FleetItem {...airplane} key={airplane.id} />
      ))}
    </StyledFleetContainer>
  );
}

export default Fleet;
