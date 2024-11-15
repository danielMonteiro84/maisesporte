import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 100px 150px;
  background-color: #ffffff;
`;

export const Item = styled.div`
img{
width: 300px;
}
h3{
margin-bottom: 10px:
}
ul{
list-style-type: none;
li{
padding: 12px 0;
}
}
nav{
list-style-type: none;
display: flex;
margin-top: 15px;
li{
span{
margin-right: 15px;
}
}
}
`;

export const Copy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 150px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  ul {
    display: flex;
    align-items: center;
    li {
      list-style-type: none;
      span {
        margin-left: 15px;
      }
    }
  }
`;
