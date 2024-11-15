import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 150px;
  height: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #e53935, #fb8c00);
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
      border: 3px solid #444444;
      border-radius: 10px;
      padding: 5px;
      span{
      color: #444444;
      font-size: 1rem;
      font-weight: 200:
      }
      :hover{
      color: white;
      font-weight: bold;
      cursor: pointer
      }
    }
  }
`;
