import React from "react";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { BrowserRouter, Route } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

// Por que usar componentes funcionais?
// R: Pois as APIs mais recentes só funcionarão nos componentes
//    funcionais, nas classes não ;(
