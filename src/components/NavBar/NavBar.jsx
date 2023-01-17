import { NavLink } from "react-router-dom";

// Pegando o context:
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <aside className={styles.aside}>
      <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
          Life<span> Shared</span>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.ativo : "")}
            >
              Home
            </NavLink>
          </li>
          {!user && (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? styles.ativo : "")}
                >
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.ativo : "")}
                >
                  Cadastrar
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => (isActive ? styles.ativo : "")}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/posts/create"
                  className={({ isActive }) => (isActive ? styles.ativo : "")}
                >
                  Criar postagem
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.ativo : "")}
            >
              Sobre
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink onClick={logout}>Sair</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;
