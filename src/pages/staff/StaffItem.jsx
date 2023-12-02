import styled from "styled-components";

const StyledStaffItem = styled.button`
  transition-duration: 0.15s;
  border-style: none;
  cursor: pointer;
  &:focus {
    transform: scale(1.03);
  }
  width: 600px;
  height: 12rem;
  margin-bottom: 1rem;
  box-shadow: 0px 0rem 0.7rem rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  position: relative;
  @media (max-width: 560px) {
    width: 90%;
  }

  img {
    position: absolute;
    width: 600px;
    height: 400px;
    top: -30%;
    top: ${(props) => props.vertical};
    filter: brightness(50%);

    @media (max-width: 560px) {
      left: -28%;
      transform: translate(12%);
    }
  }

  p {
    margin: 0;
    z-index: 400;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    white-space: nowrap;
    color: #fbfbfb;
  }
`;

function StaffItem({ imgSrc, vertical, label }) {
  return (
    <StyledStaffItem vertical={vertical}>
      <p>{label}</p>
      <img src={imgSrc} alt={`Image of %CITY%`} />
    </StyledStaffItem>
  );
}

export default StaffItem;
