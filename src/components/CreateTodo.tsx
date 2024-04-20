import { useState } from "react";
import { type Todo } from "../types";

interface Props {
  onAddTodo: (title: Pick<Todo, "title">) => void;
}

const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim().length < 3) return;
    onAddTodo({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="¿Que quieres hacer?"
        autoFocus
      />
    </form>
  );
};

export default CreateTodo;
