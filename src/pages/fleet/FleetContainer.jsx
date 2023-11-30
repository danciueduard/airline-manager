import styled from "styled-components";
import FleetItem from "./FleetItem";

const dummyData = [
  {
    model: "Boeing 737",
    maxRange: 2000,
    maxCapacity: "183",
    status: "Parked",
    condition: "81%",
    planeImg:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/South_African_Airlink_Boeing_737-200_Advanced_Smith.jpg",
    id: 10,
  },

  {
    model: "Airbus 320",
    maxRange: 1900,
    maxCapacity: "183",
    status: "Parked",
    condition: "91%",
    planeImg:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/American_Airlines_A319_N751UW_Photo_2.jpg",
    id: 11,
  },
  {
    model: "Airbus 330",
    maxRange: 1900,
    maxCapacity: "183",
    status: "Parked",
    condition: "91%",
    planeImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg/1920px-Turkish_Airlines%2C_Airbus_A330-300_TC-JNL_NRT_%2823708073592%29.jpg",
    id: 12,
  },
];

console.log(...dummyData);

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

function FleetContainer() {
  return (
    <StyledFleetContainer>
      {dummyData.map((airplane) => (
        <FleetItem {...airplane} key={airplane.id} />
      ))}
    </StyledFleetContainer>
  );
}

export default FleetContainer;
