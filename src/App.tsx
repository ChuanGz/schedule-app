/* eslint-disable no-debugger */
import "./index.css";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoType } from "./types/TodoType";
import { AddNewToDo } from "./components/AddNewToDo";
import { TodoList } from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [newToDoName, setNewTodoName] = useState<string>("");
  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoName(e.target.value);
  };
  const onAddClick = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newToDoName,
      isCompleted: false,
    };
    setTodoList([newTodoItem, ...todoList]);
    setNewTodoName("");
  };
  const updateIsCompleted = (todoId: string) => {
    setTodoList((preState) => {
      return preState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <p>This is todo app</p>
      <AddNewToDo
        newToDoName={newToDoName}
        onNewTodoChange={onNewTodoChange}
        onAddClick={onAddClick}
      ></AddNewToDo>
      <TodoList todoList={todoList} updateIsCompleted={updateIsCompleted} />
    </>
  );
}

export default App;
