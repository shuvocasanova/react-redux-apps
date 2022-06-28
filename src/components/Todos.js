import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllTodos} from "../store/actions/todosActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      <section>
        {todos && todos.map((todo) => (
           <article key={todo.id}>
            <h4>{todo.id}</h4>
            <h4>{todo.title}</h4>
            <p>{todo.completed}</p>
           </article>
        ))}
      </section>
    </div>
  );
};

export default Todos;
