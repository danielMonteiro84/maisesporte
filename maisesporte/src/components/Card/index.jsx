import React from "react";
import { Container, Description, Img, Itens } from "./styles";

const Card = () => {
  return (
    <Container>
      <Img>
        <img src="/assets/logo.png" alt="" />
      </Img>
      <Description>
        <h4>Evento</h4>
        <Itens>
          <span></span>
          <span>xxxxxx</span>
        </Itens>
      </Description>
    </Container>
  );
};

export default Card;
