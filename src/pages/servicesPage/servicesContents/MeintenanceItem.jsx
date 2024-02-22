import styled from "styled-components";

const StyledMeintenanceBox = styled.div`
  width: 10rem;
  height: 14rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0rem 0.7rem rgba(0, 0, 0, 0.1);
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  filter: brightness(50%);
  border-radius: var(--border-radius-lg);
`;

const CenteredParagraph = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-transform: uppercase;
`;

function MeintenanceItem({ image, paragraph }) {
  return (
    <StyledMeintenanceBox>
      <BackgroundImage src={image} alt="Background" />
      <CenteredParagraph>{paragraph}</CenteredParagraph>
    </StyledMeintenanceBox>
  );
}

export default MeintenanceItem;
