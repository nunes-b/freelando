import { TheemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Card } from "./components/Card/card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { Header } from "./components/Header/Header";
import { Tipografia } from "./components/Tipografia/Tipografia";

function App() {
  return (
    <TheemeProvider>
      <Estilos />
      <Header>
        <h2> Header</h2>
      </Header>
      <Card>
        <Tipografia variante="h3" componente="h1">
          Freelando
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.
        </Tipografia>
      </Card>
    </TheemeProvider>
  );
}

export default App;
