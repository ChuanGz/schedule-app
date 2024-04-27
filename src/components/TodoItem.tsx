import { Button } from "@mui/material";
import "../index.css";
import { TodoIcon } from "./TodoIcon";
export const TodoItem = (todoItem: { name: string; isCompleted: boolean }) => {
  return (
    <Button
      fullWidth
      style={{ justifyContent: "space-between" }}
      endIcon={<TodoIcon isCompleted={todoItem.isCompleted} />}
    >
      {todoItem.name}
    </Button>
  );
};
