import React, {useState} from 'react';
import './App.css';

import Header from './Header';

function App() {
  /* Usando useState para mudar o estado da aplicação 
     -> O useState retorna um array com o "algo" sucetivel a mudar
        e uma função para se setar mudar o algo
   */
  const [counter, setCounter] = useState(0);
  
  return (
    <div className='container'>
      <Header title="Hello Worlds"/>
      <h1>Counter {counter}</h1>
      <button type="button" onClick={ ()=>{setCounter(counter + 1)} }>Aumentar</button>
    </div>
  );
}

export default App;
