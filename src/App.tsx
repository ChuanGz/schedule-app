import { Button, TextField } from "@mui/material";
import "./index.css";
import { Todo } from "./components/Todo";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "./types/TodoType";

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [newToDoName, setNewTodoName] = useState<string>("");
  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };
  const onAddClick = () => {
    const newTodoObject: TodoType = {
      id: uuidv4(),
      name: newToDoName,
      isCompleted: false,
    };
    setTodoList([newTodoObject, ...todoList]);
    setNewTodoName("");
  };

  return (
    <>
      <p className="read-the-docs">This is todo app</p>
      <div>
        <TextField
          size="small"
          value={newToDoName}
          onChange={onNewTodoChange}
        ></TextField>
        <Button variant="contained" onClick={onAddClick}>
          Add me
        </Button>
        <div>
          {todoList.map((todo) => {
            return <Todo name={todo.name}></Todo>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
