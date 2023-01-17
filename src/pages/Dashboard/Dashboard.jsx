import React from "react";
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// hooks

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// components

import DashboardPosts from "../../components/DashboardPosts/DashboardPosts";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  // postagem do usuário

  return (
    <section className={styles.section}>
      {loading && <p>Carregando postagens...</p>}
      <header className={styles.header}>
        <h2>Dashboard</h2>
        <p>
          Olá <span>{user.displayName}</span>, bem-vindo(a) a sua dashboard!
        </p>
        <small>
          Aqui você pode fazer os gerenciamentos das suas postagens.
        </small>
      </header>
      {posts && posts.length === 0 && (
        <div className={styles.sem__postagem}>
          <h3>Nenhuma postagem encontrada!</h3>
          <Link className="btn" to="/posts/create">
            Criar postagem
          </Link>
        </div>
      )}
      <ul className={styles.tem__postagem}>
        {posts &&
          posts.map((post) => <DashboardPosts post={post} key={post.id} />)}
      </ul>

      <section className={styles.posts}></section>
    </section>
  );
};

export default Dashboard;
