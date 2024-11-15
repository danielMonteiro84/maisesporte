import styled from "styled-components";

export const Container = styled.div`
  padding: 200px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url("/assets/corrida03.png");
`;

export const Text = styled.div`
  width: 55%;
  position: relative;
  z-index: 1;
  h2 {
    color: #ffffff;
    font-size: 62px;
    font-weight: 700px;
    margin-bottom: 35px;
  }
  p {
    color: #ffffff;
    margin-bottom: 25px;
    font-size: 22px;
  }
  span {
    background-color: #fb8c00;
    border: 0;
    color: #ffffff;
    font-size: 25px;
    font-weight: 600px;
    padding: 12px 120px;
    line-height: 24px;
    border-radius: 3px;
    cursor: pointer;
  }
`;
