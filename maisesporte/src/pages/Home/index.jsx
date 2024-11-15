import React, { Fragment } from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../components/Card";

const Home = () => {
  let Cards = [];
  for (let i = 0; i < 4; i++) {
    Cards.push(<Card Key={i} />);
  }
  return (
    <Fragment>
      <Header>
        <h2>Encontre seu próximo desafio</h2>
      </Header>
      <Wrapper>{Cards}</Wrapper>
    </Fragment>
  );
};

export default Home;
