import styled from "styled-components";

export const Container = styled.div`
  width: 24%;
  margin-bottom: 12px;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

export const Description = styled.div`
  padding: 12px;
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fb8c00;
  }
  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const Itens = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  span {
    margin-bottom: 10px;
  }
`;
