import { useState } from 'react'
import './App.css'
import nuvem from './imgs/nuvem.png';
import bus from './imgs/bus.png';


function App() {

  return (
    <>
      <img src={nuvem} className='nuvem1' alt="" />
      <img src={nuvem} className='nuvem3' alt="" />
      <div className="container-img">
        <img src={bus} alt="Ônibus" className='bus' />
      </div>
      <form action="">
        <div class="container">
          <h1>Motorista</h1>
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
