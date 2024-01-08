import { TheemeProvider } from "./ThemeProvider/ThemeProvider";
import { Card } from "./components/Card/card";
import { Estilos } from "./components/EstilosGlobais/Estilos";

function App() {
  return (
    <TheemeProvider>
      <Estilos />
      <Card>
        <h1> Freelando</h1>
      </Card>
    </TheemeProvider>
  );
}

export default App;
