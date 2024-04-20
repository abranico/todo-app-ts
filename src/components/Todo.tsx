import type { Todo, TodoId } from "../types";

interface Props extends Todo {
  handleRemove: ({ id }: TodoId) => void;
  handleCompleted: ({ id, completed }: Pick<Todo, "id" | "completed">) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  handleRemove,
  handleCompleted,
}) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={(e) => {
          handleCompleted({ id, completed: e.target.checked });
        }}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => handleRemove({ id })} />
    </div>
  );
};

export default Todo;
