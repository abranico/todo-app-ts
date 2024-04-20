import { useState } from "react";
import Todos from "./components/Todos";
import type { FilterValue, Todo, TodoId } from "./types";
import Footer from "./components/Footer";
import { TODO_FILTERS } from "./consts";
import Header from "./components/Header";

const mockTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: true,
  },
  {
    id: "2",
    title: "todo 2",
    completed: false,
  },
  {
    id: "3",
    title: "todo 3",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<Todo, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: Pick<Todo, "title">): void => {
    setTodos((prevTodo) =>
      prevTodo.concat({
        id: crypto.randomUUID(),
        title,
        completed: false,
      })
    );
  };

  const activeCount = todos.filter((todo) => todo.completed === false).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        handleRemove={handleRemove}
        handleCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
