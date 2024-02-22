import styled from "styled-components";
import Catering from "./servicesContents/Catering";
import Pricing from "./servicesContents/Pricing";
import Fuel from "./servicesContents/Fuel";
import Meintenance from "./servicesContents/Meintenance";
// import Pricing from "./servicesContents/Pricing";

const StyledContentPage = styled.div`
  margin-top: 3rem;
  display: grid;
  row-gap: 5rem;
  column-gap: 7rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  .icon {
    color: var(--secondary-color);
  }
`;

function ContentPage({ data, activeItem }) {
  return (
    <StyledContentPage>
      {activeItem === "catering" ? <Catering data={data} /> : null}
      {activeItem === "pricing" ? <Pricing data={data} /> : null}
      {activeItem === "fuel" ? <Fuel data={data} /> : null}
      {activeItem === "meintenance" ? <Meintenance data={data} /> : null}
    </StyledContentPage>
  );
}

export default ContentPage;
