// ServicesCard.jsx
import styled from "styled-components";

const ServiceCardContainer = styled.div`
  color: var(--primary-color);
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2rem 1fr;
  justify-content: center;
  height: 6rem;

  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding-left: 12rem;
  transition: box-shadow 0.3s ease;

  img {
    /* display: none; */
    position: absolute;
    top: -70%;
    left: 0%;
    border-bottom-right-radius: 50%;
    border-top-right-radius: 50%;
    transform: scale(4);
    margin-left: 2.3rem;
    height: inherit;
    width: auto;
  }

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const StyledTitle = styled.p`
  text-align: center;
  grid-column: span 2;
`;

const StyledContent = styled.div`
  grid-column: span 2;

  justify-content: center;
  font-size: 0.8rem;
  display: flex;
  gap: 1rem;
  /* flex-direction: column; */
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    color: var(--secondary-color);
    text-align: center;
    /* margin-left: 1rem; */
  }
`;

function ServiceItem({ label, img, data }) {
  return (
    <ServiceCardContainer>
      <img src={img} alt="" />
      <StyledTitle>{label}</StyledTitle>
      <StyledContent>
        {data.map((item) => {
          return (
            <div key={Math.random()}>
              {item.label}
              <br /> <span>{item.count}</span>
            </div>
          );
        })}
      </StyledContent>
    </ServiceCardContainer>
  );
}

export default ServiceItem;
