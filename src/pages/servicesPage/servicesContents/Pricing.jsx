import styled from "styled-components";
import Rating from "./Rating";
import icons from "../../../utility/icons";
import HorizontalLine from "../../../ui/HorizontalLine";

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.4rem;

  h3 {
    margin: 0;
    text-transform: capitalize;
  }

  p {
    font-size: 1.2rem;
  }
`;

const RatingStars = styled.span`
  display: flex;
  color: var(--secondary-color);
`;

function Pricing({ data }) {
  return data.map((item) => (
    <StyledItem key={item.id}>
      <h3>{item.id}</h3>
      <HorizontalLine />
      <RatingStars>
        <Rating num={item.rating} />
      </RatingStars>

      {item.economy && (
        <p>
          <span className="icon">{icons.economy}</span> Economy:{item.economy}€
        </p>
      )}
      {item.premium && (
        <p>
          <span className="icon">{icons.premium}</span> Premium: {item.premium}€
        </p>
      )}

      {item.referal && (
        <p>
          <span className="icon">{icons.referal}</span> Referal:10%
        </p>
      )}
      {item.loyality && (
        <p>
          <span className="icon">{icons.loyality}</span> Loyality: 20%
        </p>
      )}

      <button>MANAGE</button>
    </StyledItem>
  ));
}

export default Pricing;
