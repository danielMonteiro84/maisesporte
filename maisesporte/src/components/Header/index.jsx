import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo, Menu } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src="/assets/logo.png" alt="" />
        </Link>
      </Logo>
      <Menu>
        <ul>
          <li>
            <Link to="/login">
              <span>Cadastro/Login</span>
            </Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
