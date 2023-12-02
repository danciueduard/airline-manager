import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  text-decoration: none;
  color: var(--primary-color);

  :first-child {
    color: var(--secondary-color);
  }
  :nth-child(2) {
    font-size: 0.8rem;
  }
`;

function FooterItem({ linkTo, tag, icon }) {
  return (
    <StyledLink to={linkTo}>
      <span>{icon}</span>
      <span>{tag}</span>
    </StyledLink>
  );
}

export default FooterItem;
