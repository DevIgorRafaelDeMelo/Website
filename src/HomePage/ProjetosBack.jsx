import React from "react";
import {
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiSequelize,
  SiNodemon,
  SiVisualstudio,
  SiPostman,
  SiNpm,
  SiReact,
  SiYarn,
  SiStyledcomponents,
  SiFigma,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";

import { styled } from "styled-components";

function BackEnd(props) {
  if (props.card === "1") {
    return (
      <FullScream>
        <CardProject>
          <BoxDados>
            <h1>ORM - NodeJS / Sequelize</h1>
            <h3>
              Este projeto fornece uma visão geral do curso avançado em ORM,
              NodeJs e MySql, incluindo sua relação com a missão, objetivos de
              aprendizado e iniciativa. O curso ensina como utilizar o Sequelize
              com Javascript, utilizando a engine do NodeJs para criar um
              projeto back-end. O foco principal é a manipulação de dados do
              MySql, utilizando o protocolo do Sequelize. A ideia é criar um
              back-end para uma escola, onde serão feitos cadastros de
              estudantes, matrículas, turmas e níveis de graduação, criando as
              conexões de chaves e definindo os modelos de dados. Também foram
              utilizados seeds para popular o banco com dados iniciais. Além
              disso, foram implementadas diversas funcionalidades para
              manipulação dos dados no banco utilizando sempre o Sequelize.
            </h3>
            <h2>Tecnológicas Utilizadas</h2>
            <div>
              <SiJavascript />
              <SiMysql />
              <SiNodedotjs />
              <SiSequelize />
            </div>
            <h2>Ferramentas </h2>
            <div>
              <BsFiletypeJson />
              <SiNodemon />
              <SiVisualstudio />
              <SiPostman />
              <SiNpm />
            </div>
            <section>
              <a
                href="https://github.com/DevIgorRafaelDeMelo/MySQL-sequelize"
                target="_blank"
                rel="noreferrer"
              >
                Repositório
              </a>
              <a
                href="https://devigorrafaeldemelo.github.io/DocumentacaoSequelize/"
                target="_blank"
                rel="noreferrer"
              >
                Documentação
              </a>
              <a
                href="https://cursos.alura.com.br/user/rafaelmelo765/course/orm-nodejs-avancando-sequelize/formalCertificate"
                target="_blank"
                rel="noreferrer"
              >
                Certificado
              </a>
            </section>
          </BoxDados>
        </CardProject>
      </FullScream>
    );
  }
  if (props.card === "2") {
    return (
      <FullScream>
        <CardProject>
          <BoxDados>
            <h1>Api Express / NodeJs</h1>
            <h3>
              O projeto em questão tem como objetivo principal a criação de uma
              biblioteca fictícia por meio da manipulação de uma API, utilizando
              a tecnologia Express. Durante o desenvolvimento, foram utilizados
              recursos adicionais como nodemon, VSCode e Postman. Esse projeto
              faz parte do curso "Alura Node.js: Projeto full stack criando uma
              API com Express".
            </h3>
            <h2>Tecnológicas Utilizadas</h2>
            <div>
              <SiJavascript style={{ paddingLeft: "80px" }} />
              <SiNodedotjs style={{ paddingRight: "80px" }} />
            </div>
            <h2>Ferramentas </h2>
            <div>
              <BsFiletypeJson />
              <SiNodemon />
              <SiVisualstudio />
              <SiPostman />
              <SiNpm />
            </div>
            <section>
              <a
                href="https://github.com/DevIgorRafaelDeMelo/Api-Express"
                target="_blank"
                rel="noreferrer"
              >
                Repositório
              </a>
              <a
                href="https://cursos.alura.com.br/user/rafaelmelo765/course/node-primeira-api-express/formalCertificate"
                target="_blank"
                rel="noreferrer"
              >
                Certificado
              </a>
            </section>
          </BoxDados>
        </CardProject>
      </FullScream>
    );
  }
  if (props.card === "3") {
    return (
      <FullScream>
        <CardProject>
          <BoxDados>
            <h1>Digital Cut / ReactJs</h1>
            <h3>
              A plataforma Digital Cut foi desenvolvida com o objetivo de
              auxiliar e facilitar as atividades realizadas por barbearias que
              desejam agilizar e simplificar a programação de horários e
              agendamentos. O projeto foi desenvolvido em grupo, no qual
              utilizei meus conhecimentos em front-end utilizando a biblioteca
              React para criar a interface da plataforma.
            </h3>
            <h2>Tecnológicas Utilizadas</h2>
            <div style={{ justifyContent: "space-between" }}>
              <SiJavascript />
              <SiStyledcomponents />
              <SiReact />
            </div>
            <h2>Ferramentas </h2>
            <div>
              <SiVisualstudio />
              <SiPostman />
              <SiYarn />
              <SiFigma />
            </div>
            <section>
              <a
                href="https://github.com/DevIgorRafaelDeMelo/CutTesting"
                target="_blank"
                rel="noreferrer"
              >
                Repositório
              </a>
              <a
                href="https://cut-testing.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Web
              </a>
            </section>
          </BoxDados>
        </CardProject>
      </FullScream>
    );
  }
  if (props.card === "4") {
    return (
      <FullScream>
        <CardProject>
          <BoxDados>
            <h1>Burger / Html5</h1>
            <h3>
              Desenvolvi a página de um portfólio de vendas para um site em que
              estou participando, utilizando apenas HTML, CSS e JavaScript
              puros. A página é totalmente responsiva e intuitiva para o
              usuário, e utilizei todo o meu conhecimento em desenvolvimento
              web, com algumas referências da internet para aprimorar o
              resultado final.
            </h3>
            <h2>Tecnológicas Utilizadas</h2>
            <div style={{ justifyContent: "space-between" }}>
              <SiJavascript />
              <SiHtml5 />
              <SiCss3 />
            </div>
            <h2>Ferramentas </h2>
            <div style={{ justifyContent: "space-between" }}>
              <div></div>
              <SiVisualstudio />
              <div></div>
            </div>
            <section>
              <a
                href="https://github.com/DevIgorRafaelDeMelo/Projeto-Burguer"
                target="_blank"
                rel="noreferrer"
              >
                Repositório
              </a>
              <a
                href="https://projeto-burguer.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Web
              </a>
            </section>
          </BoxDados>
        </CardProject>
      </FullScream>
    );
  }
  if (props.card === "5") {
    return (
      <FullScream>
        <CardProject>
          <BoxDados>
            <h1>Doctor / Html5</h1>
            <h3>
              Desenvolvi uma landing page utilizando HTML, CSS e JavaScript
              puros. A página é responsiva e funcional, o que permite uma boa
              experiência de navegação aos usuários.
            </h3>
            <h2>Tecnológicas Utilizadas</h2>
            <div style={{ justifyContent: "space-between" }}>
              <SiJavascript />
              <SiHtml5 />
              <SiCss3 />
            </div>
            <h2>Ferramentas </h2>
            <div style={{ justifyContent: "space-between" }}>
              <div></div>
              <SiVisualstudio />
              <div></div>
            </div>
            <section>
              <a
                href="https://github.com/DevIgorRafaelDeMelo/Projeto-Doctor"
                target="_blank"
                rel="noreferrer"
              >
                Repositório
              </a>
              <a
                href="https://projeto-doctor-one.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Web
              </a>
            </section>
          </BoxDados>
        </CardProject>
      </FullScream>
    );
  }
}

const FullScream = styled.div`
  position: fixed;
  top: 10%;
  left: 0%;
  z-index: 1000000;
  width: 80%;
  left: 10%;
  height: auto;
`;

const CardProject = styled.div`
  margin: auto;
  height: 100%;
  width: 70%;
  background: #0374f5;
  display: flex;
`;

const BoxDados = styled.div`
  padding: 70px;
  width: 100%;
  color: #ebebeb;
  text-align: center;
  div {
    font-size: 40px;
    color: #0006a6;
    margin: auto;
    width: 20%;
    display: flex;
    justify-content: space-between;
  }
  h1 {
    font-family: "Kanit", sans-serif;
    font-weight: 400;
  }
  h2 {
    font-family: "Kanit", sans-serif;
    font-weight: 300;
    font-size: 20;
  }
  h3 {
    font-family: "Kanit", sans-serif;
    font-size: 18px;
    font-weight: 200;
  }
  section {
    justify-content: space-between;
    display: flex;
    font-family: "Kanit", sans-serif;
    width: 60%;
    margin: auto;
    margin-top: 10%;
    a {
      width: 100px;
      padding: 10px 40px;
      background: #00aeff;
    }
    a:hover {
      cursor: pointer;
      background: #0044ff;
    }
  }
`;

export default BackEnd;
