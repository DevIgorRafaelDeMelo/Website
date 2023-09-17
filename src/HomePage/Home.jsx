import React from "react";
import { styled } from "styled-components";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillHtml5,
  AiOutlineGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import {
  BsFiletypeScss,
  BsBootstrapFill,
  BsDiscord,
  BsLinkedin,
} from "react-icons/bs";
import {
  SiJavascript,
  SiTailwindcss,
  SiStyledcomponents,
  SiMysql,
  SiPython,
} from "react-icons/si";
import ImgFundo from "../img/pexels-white-noiise-8992445.jpg";
import MinhaImg from "../img/fund.webp";
import ImgBackum from "../img/Bilingue.jpg";
import ImgFrontUm from "../img/pexels-matheus-oliveira-10949676.jpg";
import ImgFrontDdois from "../img/bank.webp";
import ImgFrontDTreis from "../img/CardTech1.jpeg";
import ImgFrontDQuatro from "../img/CardTech.webp";
import "./cssGlobais.css";

function Home() {
  return (
    <>
      <Header>
        <SectionMenu>
          <ItenMenuMain href="">Inicio</ItenMenuMain>
          <ItenMenu href="#Sobre">Sobre</ItenMenu>
          <ItenMenu href="#Projetos">Projetos</ItenMenu>
          <ItenMenu href="#Soft">Skills software</ItenMenu>
        </SectionMenu>
      </Header>
      <MainContainer>
        <Parallax>
          <HomePage id="Header">
            <TitleHome>
              <Text1>Olá, Eu sou </Text1>
              <Text2>Igor Rafael de Melo</Text2>
              <Text3>Web Desenvolvedor / ReactJs / Python</Text3>
            </TitleHome>
            <IconMenu>
              <a href="https://github.com/DevIgorRafaelDeMelo" target="_Blanck">
                <AiFillGithub
                  style={{ height: "55px", width: "55px", color: "#38035c" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/igor-rafael-de-melo-3b9a69240/"
                target="_Blanck"
              >
                <AiFillLinkedin
                  style={{ height: "55px", width: "55px", color: "#0f459d" }}
                />
              </a>
            </IconMenu>
            <BtnProjetos>
              <Btn href="#Projetos">Projetos</Btn>
            </BtnProjetos>
          </HomePage>
        </Parallax>
        <Content>
          <Sobre id="Sobre">
            <BoxUm></BoxUm>
            <BoxDois>
              <TextTitleUm>Um pouco sobre mim</TextTitleUm>
              <TextTitleDois>
                Olá me chamo Igor Rafael de Melo, e sou estudante de
                programação, mais especificamente em desenvolvimento Web, possou
                diversos curso e formação técnica em análise de sistemas
                Web/Mobile, estou a procura de uma oportunidade na área de Ti,
                nesse portfólio a sistemas Back e Front-End que desenvolvi
                durante meu aprendizado.
              </TextTitleDois>
            </BoxDois>
          </Sobre>
          <ProjetosDesenvolvidos id="Projetos">
            <Textprojetos>Projetos</Textprojetos>
            <FrontEnd>
              <TextSkill>Front-End</TextSkill>
              <LineHorizontal></LineHorizontal>
              <SectionProjetos>
                <CardProjeto>
                  <a href="https://play-tradutor.vercel.app/" target="_Blanck">
                    <CardFrontkTreis>
                      <CardDate>09/Agosto</CardDate>
                      <CardTitle>Jogo traduz</CardTitle>
                      <div>
                        <FaReact
                          style={{
                            height: "90px",
                            width: "90px",
                            paddingTop: "25px",
                            paddingBottom: "25px",
                            color: "#1e90ff",
                          }}
                        />
                      </div>
                      <CardFerramentas>
                        Vite/React/JavaScript/Tailwind
                      </CardFerramentas>

                      <CardFerramentas style={{ marginTop: "10px" }}>
                        Desktop | Mobile
                      </CardFerramentas>
                    </CardFrontkTreis>
                  </a>
                </CardProjeto>
                <CardProjeto>
                  <a href="https://myphrases.vercel.app/" target="_Blanck">
                    <CardFrontkQuatro>
                      <CardDate>17/Setembro</CardDate>
                      <CardTitle>Home e-Commerce</CardTitle>
                      <div>
                        <FaReact
                          style={{
                            height: "90px",
                            width: "90px",
                            paddingTop: "25px",
                            paddingBottom: "25px",
                            color: "#1e90ff",
                          }}
                        />
                      </div>
                      <CardFerramentas>
                        Vite/React/JavaScript/Tailwind
                      </CardFerramentas>

                      <CardFerramentas style={{ marginTop: "10px" }}>
                        Desktop
                      </CardFerramentas>
                    </CardFrontkQuatro>
                  </a>
                </CardProjeto>
                <CardProjeto>
                  <a
                    href="https://bankprojeto-mbtu.vercel.app/"
                    target="_Blanck"
                  >
                    <CardFrontkDois>
                      <CardDate>29/Julho</CardDate>
                      <CardTitle>MyBank</CardTitle>
                      <div>
                        <FaReact
                          style={{
                            height: "90px",
                            width: "90px",
                            paddingTop: "25px",
                            paddingBottom: "25px",
                            color: "#1e90ff",
                          }}
                        />
                      </div>
                      <CardFerramentas>
                        Vite/React/JavaScript/Tailwild
                      </CardFerramentas>
                      <CardFerramentas style={{ marginTop: "10px" }}>
                        Desktop
                      </CardFerramentas>
                    </CardFrontkDois>
                  </a>
                </CardProjeto>
                <CardProjeto>
                  <a
                    href="https://yamaha-java-script-react-b9o2earlc-devigorrafaeldemelo.vercel.app/?vercelToolbarCode=dEoNrDChS8TBBvX"
                    target="_Blanck"
                  >
                    <CardFrontkUm>
                      <CardDate>01/Abril</CardDate>
                      <CardTitle>Yamaha</CardTitle>
                      <div>
                        <FaReact
                          style={{
                            height: "90px",
                            width: "90px",
                            paddingTop: "25px",
                            paddingBottom: "25px",
                            color: "#1e90ff",
                          }}
                        />
                      </div>
                      <CardFerramentas>
                        ReactJs/Styled-Components/javaScript
                      </CardFerramentas>
                      <CardFerramentas style={{ marginTop: "10px" }}>
                        Desktop
                      </CardFerramentas>
                    </CardFrontkUm>
                  </a>
                </CardProjeto>
              </SectionProjetos>
            </FrontEnd>
            <FrontEnd>
              <TextSkill>Back-End</TextSkill>
              <LineHorizontal></LineHorizontal>

              <SectionProjetos>
                <CardProjeto>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://github.com/DevIgorRafaelDeMelo/PythonCursoAvancado"
                    target="_Blanck"
                  >
                    <CardBackUm>
                      <CardDate>09/Agosto</CardDate>
                      <CardTitle>Jogo da forca</CardTitle>
                      <div>
                        <SiPython
                          style={{
                            height: "90px",
                            width: "90px",
                            paddingTop: "25px",
                            paddingBottom: "25px",
                            color: "#0762D0",
                          }}
                        />
                      </div>
                      <CardFerramentas>Python</CardFerramentas>
                    </CardBackUm>
                  </a>
                </CardProjeto>
                <CardProjeto>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://github.com/DevIgorRafaelDeMelo/OObjValidador"
                    target="_Blanck"
                  >
                    <CardBackUm>
                      <CardDate>09/Setenbro</CardDate>
                      <CardTitle>Validador Login OObj</CardTitle>
                      <div>
                        <SiPython
                          style={{
                            height: "90px",
                            width: "90px",
                            paddingTop: "25px",
                            paddingBottom: "25px",
                            color: "#0762D0",
                          }}
                        />
                      </div>
                      <CardFerramentas>Python</CardFerramentas>
                    </CardBackUm>
                  </a>
                </CardProjeto>
                <CardProjeto>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://github.com/DevIgorRafaelDeMelo/Integracao-React-Mysql-nodeJs"
                    target="_Blanck"
                  >
                    <CardBackUm>
                      <CardDate>03/Março</CardDate>
                      <CardTitle>Bilíngue</CardTitle>
                      <div>
                        <SiJavascript
                          style={{
                            height: "90px",
                            width: "90px",
                            paddingTop: "25px",
                            paddingBottom: "25px",
                            color: "#FBFF04",
                          }}
                        />
                      </div>
                      <CardFerramentas>
                        JavaScript/Express/Axios/Api/Mysql
                      </CardFerramentas>
                    </CardBackUm>
                  </a>
                </CardProjeto>

                <CardProjeto>
                  <CardDate></CardDate>
                  <CardTitle></CardTitle>
                  <CardFerramentas></CardFerramentas>
                </CardProjeto>
              </SectionProjetos>
            </FrontEnd>
          </ProjetosDesenvolvidos>
          <Formação id="Soft">
            <Textprojetos>Software Skills</Textprojetos>
            <Skills>
              <CardSkill>
                <AiFillHtml5
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
              <CardSkill>
                <FaCss3Alt
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>

              <CardSkill>
                <SiStyledcomponents
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
              <CardSkill>
                <BsFiletypeScss
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
            </Skills>
            <Skills>
              <CardSkill>
                <BsBootstrapFill
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
              <CardSkill>
                <SiTailwindcss
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
              <CardSkill>
                <FaReact
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
              <CardSkill>
                <AiOutlineGithub
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
            </Skills>
            <Skills>
              <CardSkill>
                <SiJavascript
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
              <CardSkill>
                <SiPython
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
              <CardSkill>
                <SiMysql
                  style={{
                    height: "50px",
                    width: "50px",
                    paddingTop: "25px",
                    paddingBottom: "25px",
                  }}
                />
              </CardSkill>
            </Skills>
          </Formação>
          <Footer>
            <SectionFooter>
              <Links href="">INICIO</Links>
              <Links href="#Projetos">PROJETOS</Links>
              <Links href="#Sobre">SOBRE</Links>
              <Links href="#Soft">SOFTWARE SKILLS</Links>
            </SectionFooter>
            <LineFotter></LineFotter>
            <FooterIcons>
              <SectionIconsLinks>
                <a
                  href="https://github.com/DevIgorRafaelDeMelo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub style={{ width: "40px" }} />
                </a>
                <a
                  href="https://www.instagram.com/igor.rafael.melo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram style={{ width: "40px" }} />
                </a>
                <a
                  href="https://contate.me/igorrmd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineWhatsApp style={{ width: "40px" }} />
                </a>
                <a
                  href="https://discord.gg/6Vc9SDyg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsDiscord style={{ width: "40px" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/igor-rafael-de-melo-3b9a69240/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin style={{ width: "40px" }} />
                </a>
              </SectionIconsLinks>
            </FooterIcons>
          </Footer>
        </Content>
      </MainContainer>
    </>
  );
}

export default Home;

const SectionIconsLinks = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 30px;
  color: white;
  justify-content: space-between;
`;

const FooterIcons = styled.div``;

const LineFotter = styled.div`
  height: 1px;
  width: 50%;
  background: rgb(65, 65, 65);
  background: linear-gradient(
    90deg,
    rgba(65, 65, 65, 1) 0%,
    rgba(224, 224, 224, 1) 50%,
    rgba(65, 65, 65, 1) 100%
  );
  margin: auto;
  margin-top: 40px;
`;

const Footer = styled.div`
  margin-top: 100px;
  text-align: center;
  background: #414141;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const SectionFooter = styled.div`
  display: flex;
  color: white;
  width: 25%;
  margin: auto;
  justify-content: space-between;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 100;
  font-size: 10px;
  padding-top: 50px;
`;

const Links = styled.a`
  text-decoration: none;
  color: white;
  padding: 10px;
  border-bottom: solid 1px #414141;
  &:hover {
    border-bottom: solid 1px white;
  }
`;

const CardSkill = styled.div`
  width: 22%;
  padding-top: 30px;
  height: 130px;
  background: #106adf;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  &:hover {
    background: #0350b6;
  }
`;

const Skills = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: space-between;
  width: 50%;
  margin: auto;
  color: white;
`;

const Formação = styled.div``;

const CardConteundo = styled.div`
  background-image: url(${ImgFundo});
  background-size: cover;
  height: 100%;
  filter: blur(0.2px);
  transition: transform 0.2s;
  &:hover {
    filter: blur(0px);
    transform: scale(1.2);
  }
`;

const CardFrontkQuatro = styled(CardConteundo)`
  background-image: url(${ImgFrontDQuatro});
`;

const CardFrontkTreis = styled(CardConteundo)`
  background-image: url(${ImgFrontDTreis});
`;

const CardFrontkDois = styled(CardConteundo)`
  background-image: url(${ImgFrontDdois});
`;
const CardBackUm = styled(CardConteundo)`
  background-image: url(${ImgBackum});
`;
const CardFrontkUm = styled(CardConteundo)`
  background-image: url(${ImgFrontUm});
`;

const LineHorizontal = styled.div`
  height: 2px;
  width: 40%;
  background: rgb(249, 249, 249);
  background: linear-gradient(
    90deg,
    rgba(249, 249, 249, 1) 0%,
    rgba(0, 151, 249, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  margin: auto;
  margin-top: 30px;
`;

const CardFerramentas = styled.div`
  margin-top: 10px;
  font-size: 15px;
  font-family: "Kanit", sans-serif;
  color: white;
`;

const CardTitle = styled.div`
  color: white;
  font-weight: 500;
  font-size: 30px;
  font-family: "Kanit", sans-serif;
`;

const CardDate = styled.div`
  color: white;
  padding-top: 130px;
  font-size: 10px;
  font-family: "Kanit", sans-serif;
`;

const CardProjeto = styled.div`
  height: 60vh;
  background: black;
  width: 23%;
  border-radius: 2%;
  overflow: hidden;
`;

const SectionProjetos = styled.div`
  display: flex;
  width: 80%;
  padding-bottom: 30px;
  padding-top: 30px;
  margin: auto;
  justify-content: space-between;
`;

const TextSkill = styled.div``;

const FrontEnd = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
`;

const Textprojetos = styled.div`
  text-align: center;
  padding-top: 100px;
  font-size: 40px;
  font-family: "Kanit", sans-serif;
`;

const ProjetosDesenvolvidos = styled.div``;

const MainContainer = styled.div`
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100vh;
  width: 103%;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const Parallax = styled.div`
  display: flex;
  flex: 1 0 auto;
  position: relative;
  height: 100vh;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
`;
const Content = styled.div`
  display: block;
  position: relative;
  background-color: white;
  z-index: 1;
`;
const HomePage = styled.section`
  background-image: url(${ImgFundo});
  height: 100vh;
  width: 104%;
  background-size: cover;
`;
const Header = styled.section`
  height: 10vh;
  width: 100%;
  display: flex;
  position: fixed;
  background: rgba(0, 0, 0, 0.1);
  z-index: 4;
  top: 0px;
`;
const SectionMenu = styled.section`
  font-family: "Kanit", sans-serif;
  display: flex;
  margin-top: 2.5vh;
  font-size: 13px;
  position: fixed;
  top: 0px;
  right: 10px;
`;
const ItenMenu = styled.a`
  width: 200px;
  height: 33px;
  padding-top: 10px;
  margin-right: 10px;
  text-align: center;
  border: 2px solid transparent;
  color: white;
  text-decoration: none;
  &:hover {
    background: #858585;
    cursor: pointer;
  }
`;
const ItenMenuMain = styled(ItenMenu)`
  background: #106adf;
`;
const TitleHome = styled.div`
  color: white;
  font-family: "Kanit", sans-serif;
  font-weight: 800;
  width: 600px;
  margin: auto;
  margin-top: 25vh;
  font-size: 40px;
`;

const Text1 = styled.div`
  color: #f7f7f7;
  font-size: 34px;
  font-weight: 300;
`;
const Text2 = styled.div`
  color: black;
  font-size: 55px;
  font-weight: 500;
  padding-top: 30px;
`;
const Text3 = styled.div`
  color: #505050;
  font-size: 24px;
  font-weight: 300;
  margin-top: 15px;
`;
const IconMenu = styled.div`
  width: 10%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  margin-top: 50px;
`;
const BtnProjetos = styled.div`
  width: 100%;
  text-align: center;
  background: #ffffff00;
  margin-top: 100px;
`;
const Btn = styled.a`
  padding: 10px 50px;
  background: #c4c4c425;
  border: solid 2px white;
  border-radius: 2px;
  color: white;
  text-decoration: none;
  margin-top: 100px;
  &:hover {
    background: #106adf;
    cursor: pointer;
  }
`;
const Sobre = styled.section`
  width: 100%;
  display: flex;
`;
const BoxUm = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(${MinhaImg});
  background-size: cover;
  margin: 0px;
  padding: 0px;
`;
const BoxDois = styled.div`
  width: 50%;
  background: #0677e0;
`;
const TextTitleUm = styled.div`
  font-weight: 800px;
  padding: 50px;
  padding-top: 200px;
  padding-bottom: 0px;
  font-size: 40px;
  font-family: "Kanit", sans-serif;
  color: #fdfdfd;
`;
const TextTitleDois = styled.div`
  font-size: 25px;
  padding: 50px;
  width: 70%;
  color: white;
  padding-top: 50px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
