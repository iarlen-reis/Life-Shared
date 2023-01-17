import React from "react";

// components
import OnePost from "../../components/OnePost/OnePost";

// hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <>
      {loading && <p>Carregando postagem...</p>}
      {post && <OnePost post={post} />}
    </>
  );
};

export default Post;
