import { TheemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Card } from "./components/Card/card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { Header } from "./components/Header/Header";
import { Tipografia } from "./components/Tipografia/Tipografia";
import { CampoTexto } from "./components/CampoTexto/CampoTexto";
import { Rodape } from "./components/Footer/Rodape";
import { Col, Container, Row } from "react-grid-system";
import { Botao } from "./components/Botoes/Botao";
import { DropDown } from "./components/DropDown/DropDown";
import { EstadosBrasileiros } from "./Utils/EstadosBrasileiros";

function App() {
  return (
    <TheemeProvider>
      <Estilos />
      <Header>
        <h2> Login</h2>
      </Header>
      <Container style={{ margin: "80px" }}>
        <Card>
          <Row justify="center">
            <Col lg={6} md={8} sm={12}>
              <Tipografia variante="h3" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <CampoTexto titulo="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <DropDown titulo="Estado" opcoes={EstadosBrasileiros} />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <CampoTexto titulo="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <CampoTexto titulo="Email" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <CampoTexto titulo="Repita a senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Botao variante="Primary">Anterior</Botao>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: "right" }}>
                    <Botao>Proxima</Botao>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
      <Rodape />
    </TheemeProvider>
  );
}

export default App;
