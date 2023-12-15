import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  /* gap: 0.9rem; */
  height: 2rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  /* background-color: var(--secondary-color); */
  margin: 2rem;
  width: 400px;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  p {
    /* flex: 1; */
    /* background-color: red; */
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0.5rem;
    margin: 0;
  }
  .selected {
    /* background-color: blue; */
    text-decoration: underline;
    color: blue;
  }
`;

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function ServicesMenu() {
  return (
    <DivContainer>
      <StyledMenu>
        <p>Catering</p>
        <p className="selected">Pushback</p>
        <p>Fuel</p>
        <p>Meintenance</p>
      </StyledMenu>
    </DivContainer>
  );
}

export default ServicesMenu;
