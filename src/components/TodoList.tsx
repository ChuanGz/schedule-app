import { TodoItem } from "./TodoItem";
import { TodoListProps } from "../types/TodoListProps";

export const TodoList = ({ todoList }: TodoListProps) => {
  return (
    <div>
      {todoList.map((todo) => {
        return <TodoItem name={todo.name}></TodoItem>;
      })}
    </div>
  );
};
