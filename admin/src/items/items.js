import styled from "styled-components";

export const Title = styled.div`
  font-family: "Pretendard-Regular";
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height || "30px"};
  color: ${(props) => props.theme.White};
  font-size: ${(props) => props.theme.MediumFont};

  span {
    color: #72bae4;
  }
`;

export const FlexBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Pretendard-Regular";
    font-weight: 700;
    display: flex;
    align-items: center;
    height: 60px;
    color: ${(props) => props.theme.White};
    font-size: ${(props) => props.theme.MediumFont};
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 10px;
    background-color: ${(props) => props.theme.transBlue};
  }
`;
