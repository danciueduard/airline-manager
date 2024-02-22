import styled from "styled-components";
import FuelWeekPrice from "./FuelWeekPrice";
import Rating from "./Rating";
import HorizontalLine from "../../../ui/HorizontalLine";
import { data } from "../../../utility/data";

const StyledItem = styled.div`
  display: flex;
  margin-left: 2rem;
  flex-direction: column;
  justify-content: center;
  font-size: 1.4rem;

  h3 {
    margin: 0;
    text-transform: capitalize;
  }
`;

const RatingStars = styled.span`
  display: flex;
  color: var(--secondary-color);
`;

// TODO: REFACTOR RatingStars into a reusable UI component

function Fuel() {
  const fuel = data.services.fuel;

  return (
    <>
      <StyledItem>
        <h3>Quantity</h3>
        <HorizontalLine />
        <RatingStars>
          <Rating num={fuel.rating} />
        </RatingStars>
      </StyledItem>

      <StyledItem>
        <FuelWeekPrice />
      </StyledItem>
    </>
  );
}

export default Fuel;
