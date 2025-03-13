import React, { useState } from 'react';
import Login from './componentes/TelaLogin';
import Cadastro from './componentes/TelaCadastro';
import TelaLogado from './componentes/TelaLogado';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUsuarioLogado={setUsuarioLogado} />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/home"
          element={usuarioLogado ? <TelaLogado usuario={usuarioLogado} /> : <h1>Por favor, faça login</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
