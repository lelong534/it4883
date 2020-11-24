import styled from "styled-components";

const StyleVideoSurveillance = styled.div`
  .drone-icon:hover {
    font-size: 3em;
    background-color: #ffffff;
    border-radius: 20px;
    opacity: 0.5;
    color: #a8071a !important;
  }
`;

export const droneHoverStyle = {
  fontSize: '3em',
  backgroundColor: '#ffffff',
  borderRadius: 30,
  opacity: 0.8,
  color: '#a8071a',
}
export const droneStyle = {
  fontSize: '3em',
  backgroundColor: 'transparent',
  borderRadius: 0,
  opacity: 1,
  color: '#f5222d',
}
export default StyleVideoSurveillance;
