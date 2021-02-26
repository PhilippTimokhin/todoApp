import React, { useEffect, useState } from "react";

import Main from "./components/Main";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import Board from "./components/Board";
import TodoForm from "./containers/TodoForm";
import { Itodo } from "./interface";
import TodoList from "./containers/TodoList";
import General from "./components/General";
import Conclusion from "./components/Conclusion";

declare var confirm: (question: string) => boolean;

const Pages: React.FC = () => {
  const [todos, setTodos] = useState<Itodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as Itodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (note: string) => {
    const newTodo: Itodo = {
      note: note,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = confirm("Вы уверены, что хотите удалить элемент?");
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <Preview />
      <Main />
      <Board />
      <General />
      <Conclusion />
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
      <Footer />
    </React.Fragment>
  );
};

export default Pages;
