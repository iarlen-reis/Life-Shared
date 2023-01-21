import { NavLink } from "react-router-dom";

import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

// Pegando o context:
import { useAuthentication } from "../../hooks/useAuthentication";
import { useAuthValue } from "../../context/AuthContext";

import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [isMobile, setIsMobile] = useState(false);

  return (
    <aside className={styles.aside}>
      <nav className={`${styles.navbar} ${isMobile && styles.isMobile}`}>
        <NavLink to="/" className={styles.brand}>
          Life<span> Shared</span>
        </NavLink>
        <ul className={styles.links_list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.ativo : "")}
              onClick={() => setIsMobile(false)}
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
                  onClick={() => setIsMobile(false)}
                >
                  Entrar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? styles.ativo : "")}
                  onClick={() => setIsMobile(false)}
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
                  onClick={() => setIsMobile(false)}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/posts/create"
                  className={({ isActive }) => (isActive ? styles.ativo : "")}
                  onClick={() => setIsMobile(false)}
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
              onClick={() => setIsMobile(false)}
            >
              Sobre
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                onClick={() => {
                  logout();
                  setIsMobile(false);
                }}
              >
                Sair
              </NavLink>
            </li>
          )}
        </ul>
        <div className={`${styles.menu__mobile} ${isMobile && "isMobile"}`}>
          {!isMobile ? (
            <RiMenu3Fill size={30} onClick={() => setIsMobile(true)} />
          ) : (
            <RiCloseFill size={30} onClick={() => setIsMobile(false)} />
          )}
        </div>
      </nav>
    </aside>
  );
};

export default NavBar;
