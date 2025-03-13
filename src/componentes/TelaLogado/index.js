import React from 'react';

const TelaLogado = ({ nome }) => {
  return (
    <section className="container">
      <h1>Bem-vindo, {nome}!</h1>
    </section>
  );
};

export default TelaLogado;