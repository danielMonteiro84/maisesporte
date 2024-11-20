import React, { Fragment } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container, Item, Copy } from "./styles";

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src="/assets/logo.png" alt="" />
          <p>Siga-nos em nossas redes socias!</p>
          <nav>
            <li>
              <span>
                <FaFacebook size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaInstagram size={32} />
              </span>
            </li>
            <li>
              <span>
                <FaWhatsapp size={32} />
              </span>
            </li>
          </nav>
        </Item>
        <Item>
          <h3>Contate-nos</h3>
          <ul>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </Item>
        <Item>
          <h3>Contate-nos</h3>
          <ul>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </Item>
      </Container>
      <Copy>
        <p>
          Copyright © 2024 Daniel Monteiro - Trabalho de conclusão do curso de
          Engenharia de Software
        </p>
        <ul>
          <li>
            <span>Termos de Uso</span>
          </li>
          <li>
            <span>Política de Privacidade</span>
          </li>
          <li>
            <span>Política de Cookies</span>
          </li>
        </ul>
      </Copy>
    </Fragment>
  );
};

export default Footer;
