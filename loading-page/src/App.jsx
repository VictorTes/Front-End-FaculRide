import React, { useState, useEffect } from 'react';
import './carregamento.css';

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="island-container">
          <img src="/images/ilha.png" alt="Ilha flutuante" className="ilha-flutuante" />
          <img src="/images/nuvem.png" alt="Nuvem Superior" />
          <img src="/images/nuvem s.png" alt="Nuvem Menor" />
          <img src="/images/nuvem.png" alt="Nuvem Grande Inferior Esquerda" />
          <img src="/images/nuvem.png" alt="Nuvem Grande Inferior Direita" />
        </div>
      ) : (
        <div>
          {/* prox tela*/}
          <h1>Adicionar a próxima tela aqui</h1>
        </div>
      )}
    </>
  );
};

export default LoadingPage;
