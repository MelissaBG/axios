import * as React from 'react';
import './style.css';
import axios from 'axios';
function buscarDados(usuario){
 const URL = `https://api.github.com/users/${usuario}`;
 const resultado = axios.get(url);
 console.log(resultado);
}

export default function App() {
  buscarDados('mathiasgheno');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
