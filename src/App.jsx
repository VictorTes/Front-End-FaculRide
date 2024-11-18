import { useState } from 'react'
import './App.css'
import nuvem from './imgs/nuvem.png';
import building from './imgs/building.png';


function App() {

  return (
    <>
      <img src={nuvem} className='nuvem1' alt="" />
      <img src={nuvem} className='nuvem3' alt="" />
      <div className="container-img">
        <img src={building} alt="Empresa" className='building' />
      </div>
      <form action="">
        <div class="container">
          <h1>Empresa</h1>
          <p>Lorem ipson dolor si amet</p>
          <button>Eu confirmo</button>
          <a href="">Não, voltar  </a>
          <img src={nuvem} className='nuvem2' alt="" />
        </div>
      </form>
    </>
  )
}

export default App
