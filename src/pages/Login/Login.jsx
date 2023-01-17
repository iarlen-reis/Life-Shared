import React from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useState, useEffect } from "react";

import styles from "./Login.module.css";
const Login = () => {
  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPassword, setDisplayPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    const user = {
      displayEmail,
      displayPassword,
    };

    const respose = await login(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <section className={styles.login}>
      <h1>Área de login</h1>
      <p>Faça login e compartilhe suas historias.</p>
      <form onSubmit={handleSubmit}>
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
        {!loading && (
          <button className="btn" type="submit">
            Entrar
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

export default Login;
