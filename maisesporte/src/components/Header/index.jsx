import React from "react";

import { Container, Logo, Menu } from "./styles";

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src="/assets/logo.png" alt="" />
      </Logo>
      <Menu>
        <ul>
          <li>
            <span>Cadastro/Login</span>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Header;
