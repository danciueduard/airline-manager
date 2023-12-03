// ServicesPage.jsx
import styled from "styled-components";
import ServiceItem from "./ServicesItem";

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

const mockData = [
  {
    label: "Chefs",
    count: 2,
    key: "chefs",
  },
  {
    label: "Vehicles",
    count: 4,
    key: "vehicles",
  },
  {
    label: "Menu Items",
    count: 4,
    key: "menu-items",
  },
  {
    label: "Vehicles",
    count: 3,
    key: "pushback-vehicles",
  },
  {
    label: "Workers",
    count: 6,
    key: "pushback-workers",
  },
];
function Services() {
  console.log(mockData);

  return (
    <StyledServicesContainer>
      {/* <ServiceItem
        key={cateringData.key}
        data={cateringData}
        label={cateringData[1]}
        img={cateringData[0]}
      />
      <ServiceItem
        key={pushbackData.key}
        data={pushbackData}
        label={pushbackData[1]}
        img={pushbackData[0]}
      /> */}
      {/* {mockData.map((item) => {
        <ServiceItem
          key={item.key}
          data={item}
          label={item[1]}
          img={item[0]}
        />;
      })} */}
    </StyledServicesContainer>
  );
}

export default Services;
