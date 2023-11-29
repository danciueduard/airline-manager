/* eslint-disable react/prop-types */
import { IoIosMenu } from "react-icons/io";
import styled from "styled-components";
import Logo from "../../ui/Logo";

const StyledHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  display: grid;
  z-index: 1000;
  grid-template-columns: 1fr 1fr 1fr;

  justify-items: center;
  align-items: center;

  width: var(--initial-width);
  height: 5.6rem;
  background-color: var(--primary-color);
  box-shadow: var(--shadow-lg);
  color: white;

  :first-child {
    width: auto;
    height: auto;
    padding: 3px;
    background: none;
    border: none;
    margin: 4px 35px 0 0;
    color: var(--secondary-color);
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

function Header({ setShowMenu }) {
  function handleOpenMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  return (
    <div>
      <StyledHeaderContainer>
        <button onClick={handleOpenMenu}>
          <IoIosMenu />
        </button>
        <Logo />
      </StyledHeaderContainer>
    </div>
  );
}

export default Header;
