import { Todo } from "@/types";
import { Button } from "@/components";

interface Props extends React.HTMLProps<HTMLUListElement> {
  todoList: Todo[];
  isEditable?: boolean;
}

export const TodoList: React.FC<Props> = (props) => {
  const { todoList, isEditable, className, ...rest } = props;

  return (
    <ul {...rest} className={`grid gap-2 ${className}`}>
      {todoList.map((todo) => (
        <li
          key={todo.id}
          className="group p-4 flex items-center justify-between bg-slate-300 rounded-lg"
        >
          <p className={`${todo.completed ? "line-through" : ""}`}>
            {todo.title}
          </p>
          {isEditable ? (
            <Button
              variant="secondary"
              className="opacity-0 transition-opacity group-hover:opacity-100"
            >
              {!todo.completed ? "Mark as Ready" : "Mark as Not Ready"}
            </Button>
          ) : null}
        </li>
      ))}
    </ul>
  );
};
