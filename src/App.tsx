import React from "react";
import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <h3>Eai, Mundão, tudo certo?</h3>

      <Button text="Clica aqui" />
      <Button text="Não chega perto" />
      <Button>Não tenho props.text :o, tudo aqui é um children</Button>
      <Button />
    </div>
  );
}

export default App;

// Por que usar componentes funcionais?
// R: Pois as APIs mais recentes só funcionarão nos componentes
//    funcionais, nas classes não ;(
