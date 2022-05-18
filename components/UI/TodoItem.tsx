import { Todo } from "@/types";
import { Button } from "./Button";

interface Props extends React.HTMLProps<HTMLDivElement> {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = (props) => {
  const { todo, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={`group p-4 flex items-center justify-between bg-slate-300 rounded-lg ${className}`}
    >
      <p className={`${todo.completed ? "line-through" : ""}`}>{todo.title}</p>
      <Button
        variant="secondary"
        className="opacity-0 transition-opacity group-hover:opacity-100"
      >
        {!todo.completed ? "Mark as Ready" : "Mark as Not Ready"}
      </Button>
    </div>
  );
};
