import { useContext, createContext } from "react";

// Criando contexto:
const AuthContext = createContext();

// Criando provider:
export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Criando o useContext já com o context sendo usado:
export function useAuthValue() {
  return useContext(AuthContext);
}
