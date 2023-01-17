import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { db } from "../firebase/config";
import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanUp
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  // Pegando autentificação
  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  // Criando usuário
  const createUser = async (data) => {
    // Verificando se foi cancelado
    checkIfIsCancelled();

    // Começando o loading
    setLoading(true);
    setError("");

    try {
      // Criando o email e senha
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.displayEmail,
        data.displayPassword
      );

      // Criando o nome de usuário
      await updateProfile(user, {
        displayName: data.displayName,
      });

      // Parando o loading
      setLoading(false);

      // Retornando o usuário
      return user;
    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um error, tente mais tarde.";
      }

      setLoading(false);

      setError(systemErrorMessage);
    }
  };

  // Logout de usuário:
  const logout = () => {
    checkIfIsCancelled();

    signOut(auth);
  };

  // Efeituar login do usuário:
  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        data.displayEmail,
        data.displayPassword
      );

      setLoading(false);
    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha inválida.";
      } else {
        systemErrorMessage = "Ocorreu um error, por favor tente mais tarde.";
      }

      setLoading(false);

      setError(systemErrorMessage);
    }
  };

  useEffect(() => {
    setCancelled(true);
  }, []);

  // Retornando a autentificação, usuaŕio criado, error e loading
  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
