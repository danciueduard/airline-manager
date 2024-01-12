import styled from "styled-components";
import { IoRestaurantOutline } from "react-icons/io5";
import { CgPushDown } from "react-icons/cg";
import { PiGasCan } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import { useState } from "react";

const StyledMenu = styled.li`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  height: 2rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 2rem;
  width: 400px;
  border-radius: 1rem;

  .active {
    color: var(--secondary-color);
    transform: scale(120%);
  }
`;
const MenuItem = styled.div`
  color: var(--primary-color);
  font-size: 3rem;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.06));
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const HorizontalLine = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 27rem;
  height: 1px;
  background-color: #ccc;
`;

function ServicesMenu() {
  const [activeItem, setActiveItem] = useState(null);
  function handleClick(item) {
    setActiveItem(item);
  }

  return (
    <>
      <Container>
        <StyledMenu>
          <MenuItem
            className={activeItem === "catering" ? "active" : ""}
            onClick={() => handleClick("catering")}
          >
            <IoRestaurantOutline />
          </MenuItem>
          <MenuItem
            className={activeItem === "pushback" ? "active" : ""}
            onClick={() => handleClick("pushback")}
          >
            <CgPushDown />
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
        </StyledMenu>
      </Container>
      <Container>
        <HorizontalLine />
      </Container>
    </>
  );
}

export default ServicesMenu;
