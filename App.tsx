import * as React from 'react';
import './style.css';
import axios from 'axios';
function buscarDados(usuario) {
  const URL = `https://api.github.com/users/${usuario}`;
  const resultado = axios.get(URL);

  return resultado;
}

export default function App() {
  buscarDados('mathiasgheno').then((resultado) => {
    console.log(resultado);
  });
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
