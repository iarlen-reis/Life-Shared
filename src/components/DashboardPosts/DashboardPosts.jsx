import styles from "./DashboardPosts.module.css";
import { Link } from "react-router-dom";

import React from "react";

// hooks
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const DashboardPosts = ({ post }) => {
  const { deleteDocument } = useDeleteDocument("posts");

  return (
    <li key={post.id} className={styles.container}>
      <h3>
        Titulo da postagem: <br /> <span>{post.title}</span>
      </h3>
      <div>
        <Link to={`/posts/${post.id}`} className="btn btn__outline">
          Ver
        </Link>
        <Link to={`/posts/edit/${post.id}`} className="btn btn__outline">
          Editar
        </Link>
        <button
          onClick={() => {
            if (window.confirm("Deseja deletar esse post?"))
              deleteDocument(post.id);
          }}
          className="btn btn__danger"
        >
          DELETAR
        </button>
      </div>
    </li>
  );
};

export default DashboardPosts;
