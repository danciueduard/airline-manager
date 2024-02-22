// ServicesPage.jsx
import styled from "styled-components";
import ServicesMenu from "./ServicesMenu";
import ContentPage from "./ContentPage";
import { useState } from "react";
import { data } from "../../utility/data";

const StyledServicesContainer = styled.div`
  & {
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding-top: var(--margin-top-fix);
    height: 100vh;
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
function Services() {
  const [activeItem, setActiveItem] = useState("meintenance");
  const servicesData = data.services[activeItem];
  return (
    <StyledServicesContainer>
      <ServicesMenu activeItem={activeItem} setActiveItem={setActiveItem} />
      {servicesData ? (
        <ContentPage data={servicesData} activeItem={activeItem} />
      ) : (
        <p>ERROR loading {activeItem} data</p>
      )}
    </StyledServicesContainer>
  );
}

export default Services;
