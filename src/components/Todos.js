import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from '../app/features/todos/postSlice';

const Todos = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {isLoading ? <h3>Loading...</h3> : null}
      {error ? <h3>{error}</h3> : null}
      <section>
      {
        posts?.map((post) => (
          <article key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </article>
        ))}
        </section>
    </div>
  );
};

export default Todos;
