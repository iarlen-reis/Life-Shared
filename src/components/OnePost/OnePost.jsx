import React from "react";
import styles from "./OnePost.module.css";
const OnePost = ({ post }) => {
  return (
    <section className={styles.section}>
      <header>
        <h3>{post.title}</h3>
      </header>
      <div className={styles.image__container}>
        <img src={post.image} alt={post.title} />
        <small>
          Postagem feita por: <span>{post.createdBy}</span>
        </small>
      </div>
      <div className={styles.body}>{post.body}</div>
      <div className={styles.tags}>
        {post.tagsArray.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
    </section>
  );
};

export default OnePost;
