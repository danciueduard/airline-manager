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

function FooterItem({ children, href }) {
  return <StyledFooterItem href={href}>{children}</StyledFooterItem>;
}

export default FooterItem;
