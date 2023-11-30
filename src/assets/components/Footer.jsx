import styled from "styled-components";
import { BsAirplane } from "react-icons/bs";
import { CiAirportSign1 } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import FooterItem from "../../ui/FooterItem";

const StyledFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 3.2rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  z-index: 999;
  width: var(--initial-width);
  height: 5rem;
  background-color: #ffffff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
`;

function Footer() {
  return (
    <StyledFooterContainer>
      <FooterItem link="/fleet">
        <BsAirplane /> <span>Fleet</span>
      </FooterItem>

      <FooterItem>
        <CiAirportSign1 /> <span>Airport</span>
      </FooterItem>

      <FooterItem>
        <RiTeamLine /> <span>Staff</span>
      </FooterItem>

      <FooterItem>
        <LiaTruckLoadingSolid /> <span>Services</span>
      </FooterItem>
    </StyledFooterContainer>
  );
}

export default Footer;
