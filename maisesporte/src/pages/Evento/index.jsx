import React, { Fragment } from "react";
import TopBanner from "../../components/TopBanner";
import {
  Container,
  Left,
  Thumb,
  Right,
  Description,
  Profile,
  ProfileDescription,
  ProfileContact,
  ProfileFormContact,
  ProfileImg,
} from "./styles";

const Evento = () => {
  return (
    <Fragment>
      <TopBanner />
      <Container>
        <Left>
          <Thumb>
            <img src="/assets/thumb.png" alt="" />
          </Thumb>
          <Description>
            <h2>Corrida de Santo Onofre</h2>
            <p>
              A Prova Santo Onofre de Araraquara é um evento esportivo
              tradicional da cidade de Araraquara, SP, que reúne atletas de
              diversas modalidades, com foco em corridas e passeios ciclísticos.
              Conhecida pela sua excelente organização e pelo incentivo à
              prática esportiva, a prova oferece percursos desafiadores que
              exploram as belas paisagens da região. Além de ser uma ótima
              oportunidade para competidores de diferentes níveis testarem seus
              limites, o evento também promove o espírito de comunidade,
              inclusão e saúde, sendo um importante ponto de encontro para
              atletas amadores e profissionais.
            </p>
          </Description>
        </Left>
        <Right>
          <Profile>
            <ProfileImg>
              <img src="/assets/profile.png" alt="" />
            </ProfileImg>
            <ProfileDescription>
              <h3>Daniel Monteiro</h3>
              <p>Informações</p>
            </ProfileDescription>
          </Profile>
          <ProfileContact>
            <h3>Daniel Monteiro</h3>
            <p>(11) 111-1111</p>
            <p>teste@teste.com</p>
          </ProfileContact>
          <ProfileFormContact>
            <form>
              <input type="text" placeholder="Nome:" />
              <input type="text" placeholder="E-mail:" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Mensagem:"
              />
              <button>Enviar mensagem</button>
            </form>
          </ProfileFormContact>
        </Right>
      </Container>
    </Fragment>
  );
};

export default Evento;
