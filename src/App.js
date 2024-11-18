import React from "react";

const MotoristaCadastro = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Junte-se a nós!</h1>
        <p style={styles.subtitle}>Cadastre-se motorista</p>

        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Seu nome</label>
            <input
              type="text"
              style={styles.input}
              placeholder="Seu nome será exibido assim!"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Seu e-mail</label>
            <input
              type="email"
              style={styles.input}
              placeholder="Vamos nos manter conectados!"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Número para contato</label>
            <input
              type="tel"
              style={styles.input}
              placeholder="Assim saberemos onde encontrar!"
            />
          </div>

          <button type="button" style={styles.button}>
            Voltar
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#EAF4FF",
  },
  card: {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "30px 20px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
  },
  title: {
    color: "#3274D9",
    fontSize: "24px",
    margin: "0 0 10px",
  },
  subtitle: {
    color: "#3274D9",
    fontSize: "14px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#F9F9F9",
    outline: "none",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px",
    backgroundColor: "#3274D9",
    color: "white",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default MotoristaCadastro;
