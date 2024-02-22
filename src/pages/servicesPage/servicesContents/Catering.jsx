import styled from "styled-components";
import icons from "../../../utility/icons";
import Rating from "./Rating";
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

function Catering({ data }) {
  return data.map((item) => (
    <StyledItem key={item.id}>
      <h3>{item.id}</h3>
      <HorizontalLine />
      <RatingStars>
        <Rating num={item.rating} />
      </RatingStars>
      <p>
        <span>{icons[item.id]}</span>
        {item.count}
      </p>
      {item.skill && <p>Skill: {item.skill}%</p>}
      {item.diversity && <p>diversity: {item.diversity}%</p>}
      <button>MANAGE</button>
    </StyledItem>
  ));
}

export default Catering;
