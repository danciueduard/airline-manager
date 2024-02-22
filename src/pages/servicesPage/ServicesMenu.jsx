import styled from "styled-components";
import { IoRestaurantOutline } from "react-icons/io5";
import { PiGasCan } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import { FaCoins } from "react-icons/fa6";

const StyledMenu = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-content: center;
  text-transform: uppercase;
  width: 400px;
  border-radius: 1rem;

  .active {
    color: var(--secondary-color);
    transform: scale(120%);
    transition: 100ms;
  }
`;
const MenuItem = styled.div`
  justify-self: center;
  color: var(--primary-color);
  font-size: 3rem;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.06));
`;

// HorizontalLine is already a reusable UI component but this one remains unique to avoid any CSS changes.
const MenuHorizontalLine = styled.div`
  grid-column: -5 / -1;
  display: flex;
  align-self: center;
  width: 27rem;
  height: 1px;
  background-color: var(--primary-color);
`;

const ActiveItem = styled.p`
  grid-column: -5/-1;
  justify-self: center;
  color: var(--primary-color);
  text-transform: uppercase;
`;

function ServicesMenu({ activeItem, setActiveItem }) {
  function handleClick(item) {
    setActiveItem(item);
  }

  return (
    <StyledMenu>
      <MenuItem
        className={activeItem === "catering" ? "active" : ""}
        onClick={() => handleClick("catering")}
      >
        <IoRestaurantOutline />
      </MenuItem>
      <MenuItem
        className={activeItem === "pricing" ? "active" : ""}
        onClick={() => handleClick("pricing")}
      >
        <FaCoins />
      </MenuItem>
      <MenuItem
        className={activeItem === "fuel" ? "active" : ""}
        onClick={() => handleClick("fuel")}
      >
        <PiGasCan />
      </MenuItem>
      <MenuItem
        className={activeItem === "meintenance" ? "active" : ""}
        onClick={() => handleClick("meintenance")}
      >
        <GiAutoRepair />
      </MenuItem>
      <MenuHorizontalLine />
      <ActiveItem>{activeItem}</ActiveItem>
    </StyledMenu>
  );
}

export default ServicesMenu;
