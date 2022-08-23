import styled from "styled-components";

export const Title = styled.div`
  font-family: "Pretendard-Regular";
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
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
    flex: 0 0 auto;
    padding-bottom: 15px;
    display: flex;
    color: ${(props) => props.theme.White};
    font-size: ${(props) => props.theme.MediumFont};
  }
  .content {
    flex-grow: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 10px;
    background-color: ${(props) => props.theme.transBlue};
    overflow: hidden;
  }
`;
