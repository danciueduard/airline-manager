import styled from "styled-components";

const StyledAlertsContainer = styled.div`
  width: 25rem;
  height: 3rem;
  top: 5.6rem;
  left: 3rem;
  background-color: #000000ae;
  z-index: 501;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    text-align: center;
  }
`;

function Alerts() {
  return (
    <StyledAlertsContainer>
      <p>The flight %FLIGHT NR% had arrived in %AIRPORT%</p>
    </StyledAlertsContainer>
  );
}

export default Alerts;
