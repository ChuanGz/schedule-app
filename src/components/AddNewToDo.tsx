import { Button, TextField } from "@mui/material";
import { AddNewToDoProps } from "../types/AddNewToDoProps";

export const AddNewToDo = ({
  newToDoName,
  onNewTodoChange,
  onAddClick,
}: AddNewToDoProps) => {
  return (
    <div>
      <TextField
        size="small"
        value={newToDoName}
        onChange={onNewTodoChange}
      ></TextField>
      <Button variant="contained" onClick={onAddClick}>
        Add me
      </Button>
    </div>
  );
};
