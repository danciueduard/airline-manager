import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  color: white;
`;

function Logo() {
  return (
    <>
      <StyledLogo>
        <Link to="map">LOGO</Link>
      </StyledLogo>
    </>
  );
}

export default Logo;
