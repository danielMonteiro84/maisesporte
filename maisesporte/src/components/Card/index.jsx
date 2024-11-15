import React from "react";
import { Container, Description, Img, Itens } from "./styles";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Container>
      <Img>
        <img src="/assets/logo.png" alt="" />
      </Img>
      <Description>
        <h4>Corrida Santo Onofre</h4>
        <Itens>
          <span>
            <FaMapMarkerAlt />
            Araraquara
          </span>
          <span>R$ 50,00</span>
        </Itens>
        <Link to="/evento">
          Informações <FaArrowRight />
        </Link>
      </Description>
    </Container>
  );
};

export default Card;
