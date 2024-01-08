import { TheemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { Card } from "./components/Card/card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <TheemeProvider>
      <Estilos />
      <Header>
        <h2> Header</h2>
      </Header>
      <Card>
        <h1> Freelando</h1>
      </Card>
    </TheemeProvider>
  );
}

export default App;
