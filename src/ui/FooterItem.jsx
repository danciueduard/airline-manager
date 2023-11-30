import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooterItem = styled.div`
  color: var(--primary-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  :first-child {
    color: var(--color-orange-600);
    font-size: 2rem;
  }

  a,
  span {
    font-size: 0.8rem;
  }
`;

function FooterItem({ children, link }) {
  return (
    <Link to={link}>
      <StyledFooterItem>{children}</StyledFooterItem>
    </Link>
  );
}

export default FooterItem;
