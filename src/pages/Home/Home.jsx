// CSS Module
import styles from "./Home.module.css";

// Hooks
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useState } from "react";

// Components
import PostDetails from "../../components/Posts/PostDetails";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading, error } = useFetchDocuments("posts");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (query) {
      return navigate(`/search/?q=${query}`);
    }
  };

  return (
    <section className={styles.section}>
      <h1>Veja os nossas postagens mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Busque postagem por tags"
          onChange={({ target }) => setQuery(target.value)}
          value={query}
        />
        <button className="btn btn__dark">Pesquisar</button>
      </form>
      <section className={styles.postagens}>
        {loading && <p>Carregando...</p>}
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

        {posts && posts.length === 0 && (
          <article className={styles.nopostagem}>
            <p>Nenhuma postagem encontrada.</p>
            <Link className="btn" to="/posts/create">
              Crie uma postagem!
            </Link>
          </article>
        )}
      </section>
    </section>
  );
};

export default Home;
