import styled from "styled-components";

export const Container = styled.div`
  padding: 90px 150px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #7ed957, #33a9ce);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 250px;
    border-radius: 10px;
  }
`;

export const Menu = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    list-style-type: none;
    li {
      border: 3px solid black;
      border-radius: 10px;
      padding: 10px;
      span{
      font-size: 2rem;
      font-weight: 300:
      }
      &:hover{
      color: white;
      font-weight: bold;
      cursor: pointer
      }
    }
  }
`;
