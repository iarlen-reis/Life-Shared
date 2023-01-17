import React from "react";
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

import styles from "./Register.module.css";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPassword, setDisplayPassword] = useState("");
  const [displayConfirmPassword, setDisplayConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    const user = {
      displayName,
      displayEmail,
      displayPassword,
    };

    if (displayPassword !== displayConfirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    }

    const response = await createUser(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <section className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas historias.</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário"
            onChange={({ target }) => setDisplayName(target.value)}
          />
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário"
            onChange={({ target }) => setDisplayEmail(target.value)}
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            onChange={({ target }) => setDisplayPassword(target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
            onChange={({ target }) => setDisplayConfirmPassword(target.value)}
          />
        </label>
        {!loading && (
          <button className="btn" type="submit">
            Cadastrar
          </button>
        )}
        {loading && (
          <button className="btn" disabled type="submit">
            Aguarde...
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </section>
  );
};

export default Register;
