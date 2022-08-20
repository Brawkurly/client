import styled from "styled-components";

export const Title = styled.div`
  height: ${(props) => props.height || "30px"};
  padding: 15px;

  text-align: center;
  color: ${(props) => props.theme.White};
  font-size: ${(props) => props.theme.MediumFont};

  span {
    color: #72bae4;
  }
`;

export const FlexBox = styled.div`
  display: flex;
`;
