import styled from "styled-components";
import StaffItem from "./StaffItem";

const StyledStaff = styled.div`
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

function Staff() {
  return (
    <StyledStaff>
      <StaffItem imgSrc="/pilot.jpg" label="Pilots" />
      <StaffItem imgSrc="/cabin-crew.jpg" direction="-70%" label="Cabin Crew" />
      <StaffItem
        imgSrc="/workers.jpg"
        direction="-70%"
        label="Ground Workers"
      />
    </StyledStaff>
  );
}

export default Staff;
