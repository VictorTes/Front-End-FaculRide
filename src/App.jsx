import { useState } from 'react';
import './App.css';
import nuvem from './imgs/nuvem.png';
import island from './imgs/island.png'; 

function App() {
  return (
    <>
      <img src={nuvem} className='nuvem1' alt="" />
      <img src={nuvem} className='nuvem3' alt="" />
      <div className="container-img">
        <img src={island} alt="Empresa" className='island' />
      </div>
      <form action="">
        <button className="confirm-button">Escolha seu perfil!</button>
        <p className="function-text">Selecione aqui sua função no aplicativo</p>
        <img src={nuvem} className='nuvem2' alt="" />
      </form>
    </>
  );
}

export default App;