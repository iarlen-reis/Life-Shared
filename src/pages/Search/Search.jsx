import React from "react";
import styles from "./Search.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// components
import PostDetails from "../../components/Posts/PostDetails";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const {
    documents: posts,
    loading,
    error,
  } = useFetchDocuments("posts", search);

  return (
    <section className={styles.section}>
      <h2>Resultados para a buscar: {search}</h2>
      {loading && <p>Carregando...</p>}
      {posts && posts.length === 0 && (
        <>
          <h2>Nenhum postagem encontrada.</h2>
          <p>Não foi possivel encontrar nenhuma postagem para esse termo.</p>
          <Link to="/" className="btn btn__dark">
            Voltar
          </Link>
        </>
      )}
      {posts &&
        posts.map((post) => (
          <PostDetails
            key={post.id}
            id={post.id}
            title={post.title}
            createdBy={post.createdBy}
            image={post.image}
            tags={post.tagsArray}
          />
        ))}
    </section>
  );
};

export default Search;
