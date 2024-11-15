import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 190px;
  display: flex;
  justify-content: space-betwwen;
`;

export const Left = styled.div`
  width: 70%;
  padding: 10px;
  border: 1px solid #9e9e9e;
`;

export const Thumb = styled.div`
width: 100%;
img{
width: 100%
height: auto;
border-radius: 5px;
}
`;

export const Description = styled.div`
  padding: 30px 0;
  h2,
  p {
    margin-bottom: 15px;
    color: #333333;
    text-align: justify;
  }
`;

export const Right = styled.div`
  width: 28%;
  padding: 10px;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImg = styled.div`
  width: 115px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

export const ProfileDescription = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: #333333;
  }
`;

export const ProfileContact = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: #333333;
  }
`;

export const ProfileFormContact = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: #333333;
  }
  form {
    input,textarea {
      height: 50px;
      padding: 8px 15px;
      border-radius: 3px;
      width: 100%
      color: #333333;
      letter-spacing: 0.1px;
      font-size: 0.938rem;
      margin-bottom: 10px;
      outline: none;
      border-color: #9e9e9e;
      border: 1px solid #92A294;
      resize: none;
    }
      textarea{
      width: 100%;
      height: 100px;
      }
      button{
      width: 100%;
      cursor: pointer;
      display: inline-block;
      text-align: center;
      background-color: #4caf50;
      line-height: 24px;
      border: 0;
      color: #ffffff;
      font: 0.875rem;
      font-weight: 600;
      transition: 0.3s;
      padding: 12px 20px;
      }
  }
`;
