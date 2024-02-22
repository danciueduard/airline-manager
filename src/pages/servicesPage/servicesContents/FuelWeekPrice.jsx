import styled from "styled-components";
import { GiOilDrum } from "react-icons/gi";
import HorizontalLine from "../../../ui/HorizontalLine";

const PriceOffer = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  transform: translate(-25%);
  overflow: hidden;

  .barrel-icon {
    color: #15803d;
    font-size: 2.2rem;
    align-self: flex-end;
    transform: translate(-10%, 65%);
  }

  .fuel-image {
    transform: translate(-10%);
    margin: 1rem 0rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 90%);
    clip-path: polygon(0 0, 60% 0, 100% 100%, 0% 100%);
  }

  .overall-discount {
    display: flex;
    justify-content: end;
    position: absolute;
    top: 9.5rem;
    right: 0rem;
    z-index: 999;
    width: 4rem;
    background-color: #000000fb;
    color: #fff;
    padding: 0.5rem;
    font-weight: bold;

    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(40% 0, 100% 0, 100% 100%, 0% 100%);
  }

  span {
    color: #ffffff;
    background-color: #000;
    padding: 0.1rem 0.4rem;
  }

  p {
    font-size: 1rem;
  }
`;

const StyledFuelItem = styled.p`
  display: flex;
  background-color: #15803d;
  color: #fff;
  width: 10rem;
  height: 3.5rem;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

function FuelWeekPrice() {
  return (
    <PriceOffer>
      <h3>
        OFFERS OF <span>THE DAY</span>
      </h3>
      <GiOilDrum className="barrel-icon" />
      <img
        className="fuel-image"
        src="img/services-fuel-truck.jpg"
        alt="A truck filling the plane"
      />
      <div className="overall-discount">
        20% <br />
        OFF <br />
      </div>
      <p>100$</p>
      <HorizontalLine marginbot={1} width={11.5} />
      <StyledFuelItem>ITEM 1</StyledFuelItem>
      <StyledFuelItem>ITEM 2</StyledFuelItem>
    </PriceOffer>
  );
}

export default FuelWeekPrice;
