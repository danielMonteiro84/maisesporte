import React, { Fragment } from "react";
import { Header, Wrapper } from "./styles";
import Card from "../../components/Card";

const Home = () => {
  return (
    <Fragment>
      <Header>
        <h2>Encontre seu próximo desafio</h2>
      </Header>
      <Wrapper>
        <Card />
      </Wrapper>
    </Fragment>
  );
};

export default Home;
