import React from "react";
import styles from "./Posts.module.css";
import { Link } from "react-router-dom";

const Posts = ({ createdBy, title, image, id, tags }) => {
  return (
    <div key={id} className={styles.post}>
      <div className={styles.header}>
        <h3>
          {title} - <span>{createdBy}</span>
        </h3>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <Link to={`/posts/${id}`} className="btn btn__outline">
        Ver postagem!
      </Link>
    </div>
  );
};

export default Posts;
