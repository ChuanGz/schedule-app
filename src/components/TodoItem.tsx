import { Button } from "@mui/material";
import "../index.css";
import { TodoIcon } from "./TodoIcon";
export const TodoItem = ({
  todoId,
  name,
  isCompleted,
  updateIsCompleted,
}: {
  todoId: string;
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
}) => {
  return (
    <Button
      fullWidth
      style={{ justifyContent: "space-between" }}
      endIcon={
        <TodoIcon
          todoId={todoId}
          isCompleted={isCompleted}
          updateIsCompleted={updateIsCompleted}
        />
      }
    >
      {name}
    </Button>
  );
};
