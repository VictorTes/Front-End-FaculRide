import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Island>
        <Image src="predio-removebg-preview.png" alt="Island" />
      </Island>
      <Button>
        Escolha seu perfil!
      </Button>
      <Subtitle>Selecione aqui sua função no aplicativo</Subtitle>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, #A4DDED, #FFFFFF);
  height: 100vh;
  overflow: hidden;
`;

const Island = styled.div`
  margin-top: 50px;
`;

const Image = styled.img`
  max-width: 300px;
  height: auto;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
  }
`;

const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
  text-align: center;
`;