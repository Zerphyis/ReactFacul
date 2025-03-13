import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./TelaLogin.css";

const TelaLogin = ({ setUsuarioLogado }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const usuariosCadastrados = [
    { email: 'user1@example.com', senha: 'senha1', nome: 'Usuario' },
    { email: 'user2@example.com', senha: 'senha2', nome: 'User 2' }
  ];

  const handleSubmit = () => {
    const usuario = usuariosCadastrados.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuario) {
      setUsuarioLogado(usuario);
      navigate('/home');
    } else {
      alert('Email ou senha incorretos');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Bem vindo ao Projeto</h2>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleSubmit} className="login-btn">Entrar</button>
          <button onClick={() => navigate('/cadastro')} className="login-btn">Cadastrar Usuário</button>
        </div>
      </div>
    </div>
  );
};

export default TelaLogin;