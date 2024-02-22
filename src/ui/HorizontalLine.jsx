import styled from "styled-components";

const HorizontalLineStyle = styled.div`
  grid-column: -5/-1;
  display: flex;
  align-self: start;
  width: ${(props) => props.width}rem;
  height: 1px;
  margin-bottom: ${(props) => props.marginbot}rem;
  background-color: var(--primary-color);
`;

HorizontalLine.defaultProps = {
  width: 8,
};

function HorizontalLine({ width, marginbot }) {
  return <HorizontalLineStyle width={width} marginbot={marginbot} />;
}

export default HorizontalLine;
