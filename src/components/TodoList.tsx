import { TodoItem } from "./TodoItem";
import { TodoType } from "../types/TodoType";

export const TodoList = ({ todoList }: { todoList: TodoType[] }) => {
  return (
    <div>
      {todoList.map((todo) => {
        return <TodoItem name={todo.name}></TodoItem>;
      })}
    </div>
  );
};
