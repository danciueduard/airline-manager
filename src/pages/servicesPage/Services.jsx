// ServicesPage.jsx
import styled from "styled-components";
import ServicesMenu from "./ServicesMenu";

const StyledServicesContainer = styled.div`
  & {
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: var(--margin-top-fix);
    height: 100vh;
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

// const cateringData = [
//   "catering.jpg",
//   "Catering",
//   {
//     label: "Chefs",
//     count: 2,
//     key: "chefs",
//   },
//   {
//     label: "Vehicles",
//     count: 4,
//     key: "vehicles",
//   },
//   {
//     label: "Menu Items",
//     count: 4,
//     key: "menu-items",
//   },
// ];

// const pushbackData = [
//   "pushback.jpg",
//   "Pushback",
//   {
//     label: "Vehicles",
//     count: 3,
//     key: "pushback-vehicles",
//   },
//   {
//     label: "Workers",
//     count: 6,
//     key: "pushback-workers",
//   },
// ];

/// !!!!! NEED FIX ON DATA FLOW !!!!!!

const mockData = {
  chefs: {
    label: "Chefs",
    count: 2,
    key: "chefs",
  },
  vehicles: {
    label: "Vehicles",
    count: 4,
    key: "vehicles",
  },
  menu: {
    label: "Menu Items",
    count: 4,
    key: "menu-items",
  },
  pushback: {
    label: "Vehicles",
    count: 3,
    key: "pushback-vehicles",
  },
  workers: {
    label: "Workers",
    count: 6,
    key: "pushback-workers",
  },
};
function Services() {
  console.log(mockData.chefs.label);

  return (
    <StyledServicesContainer>
      <ServicesMenu />
    </StyledServicesContainer>
  );
}

export default Services;
