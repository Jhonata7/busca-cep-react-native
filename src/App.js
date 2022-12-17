import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState([]);

  function buscar(cep) {
    axios.get(`https://viacep.com.br/ws/06463180/json/`)
      .then(response => setEndereco(response.data));

  }

  return (
    <div className='container'>
      <p>Digite o CEP que deseja buscar</p>
      <input onChange={setCep} value={cep} placeholder="00000-000" type="text" />
      <button onClick={() => buscar(cep)}>BUSCAR</button>
      <div>
        <p>{endereco.cep}</p>
      </div>
    </div>
  );
}

export default App;

/*
{
  "cep": "06463-180",
  "logradouro": "Avenida Diretriz",
  "complemento": "",
  "bairro": "Jardim Mutinga",
  "localidade": "Barueri",
  "uf": "SP",
  "ibge": "3505708",
  "gia": "2069",
  "ddd": "11",
  "siafi": "6213"
}
*/