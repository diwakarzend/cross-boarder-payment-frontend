import styled from "styled-components";

export default styled.svg`
.circle-background,
.circle-progress {
  fill: none;
}

.circle-background {
  stroke: #ddd;
}

.circle-progress {
  stroke: ${props => props.strokeColor ? `${props.strokeColor}` : '#4d94ff'};
  stroke-linecap: round;
  stroke-linejoin: round;
}

.circle-text {
  font-size: 14px;
  font-weight: bold;
  fill: ${props => props.strokeColor ? `${props.strokeColor}` : '#4d94ff'};
}
`;