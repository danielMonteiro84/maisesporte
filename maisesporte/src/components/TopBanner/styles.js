import styled from "styled-components";

export const Container = styled.div`
  padding: 50px 150px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url("/assets/corrida03.png");
`;

export const Text = styled.div`
  width: 55%;

  z-index: 1;
  h2 {
    color: #ffffff;
    font-size: 3.875rem;
    margin-bottom: 25px;
  }
  p {
    color: #ffffff;
    margin-bottom: 25px;
  }
`;
