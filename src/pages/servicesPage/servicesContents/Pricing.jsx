import styled from "styled-components";
import Rating from "./Rating";

const StyledItem = styled.div`
  display: flex;
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

const HorizontalLine = styled.div`
  grid-column: -5 / -1;
  display: flex;
  align-self: start;
  width: 8rem;
  height: 1px;
  background-color: var(--primary-color);
`;

function Pricing({ data }) {
  return data.map((item) => (
    <StyledItem key={item.id}>
      <h3>{item.id}</h3>
      <HorizontalLine />
      <RatingStars>
        <Rating num={item.rating} />
      </RatingStars>

      {item.economy && <p>Economy:{item.economy}€</p>}
      {item.premium && <p>Premium: {item.premium}€</p>}

      {item.referal && <p>Referal:10%</p>}
      {item.loyality && <p>Loyality: 20%</p>}

      <button>MANAGE</button>
    </StyledItem>
  ));
}

export default Pricing;
