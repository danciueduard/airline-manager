/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(14px);
  z-index: 500;
  height: 100vh;
  width: var(--initial-width);
  transform: translate(${(props) => props.$showMenu && "-100%"});
  transition: 0.5s;

  .slideMenuCloseBtn {
    padding: 20px;
    position: absolute;
    left: 88%;
    top: 9.5%;
    background: none;
    border: none;
    color: var(--primary-color);
  }

  li {
    color: var(--primary-color);
    font-weight: 800;
    text-transform: uppercase;
  }
`;

function Menu({ showMenu, setShowMenu }) {
  function handleCloseMenu() {
    setShowMenu((showMenu) => !showMenu);
  }

  return (
    <StyledMenu $showMenu={showMenu}>
      <button className="slideMenuCloseBtn" onClick={handleCloseMenu}>
        x
      </button>

      <li>Account</li>
      <li>Settings</li>
      <li>Friends</li>
      <li>Achievements</li>
      <li>Messages</li>
      <li>Logout</li>
    </StyledMenu>
  );
}

export default Menu;
