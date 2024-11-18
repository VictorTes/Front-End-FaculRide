import React from "react";

function App() {
  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0d355f",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    container: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "20px",
      width: "90%",
      maxWidth: "400px",
      textAlign: "center",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    title: {
      color: "#4c93e6",
      fontSize: "1.8rem",
    },
    subtitle: {
      color: "#666",
      marginTop: "-10px",
      marginBottom: "20px",
    },
    formGroup: {
      marginBottom: "15px",
      textAlign: "left",
    },
    label: {
      display: "block",
      fontSize: "0.9rem",
      marginBottom: "5px",
      color: "#444",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #4c93e6",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    },
    button: {
      backgroundColor: "#f15b5b",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "10px",
      fontSize: "1rem",
      cursor: "pointer",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      transition: "0.3s ease",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.title}>Junte-se a nós!</h1>
        <p style={styles.subtitle}>Cadastre sua empresa</p>
        <form>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nome da empresa</label>
            <input
              type="text"
              placeholder="Nome da empressaa "
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email empresarial</label>
            <input
              type="email"
              placeholder="Email da empresa"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Número para contato</label>
            <input
              type="tel"
              placeholder="Numero de telefone da empresa"
              style={styles.input}
            />
          </div>
          <button type="button" style={styles.button}>
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
