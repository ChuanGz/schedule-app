import { TodoItem } from "./TodoItem";
import { TodoType } from "../types/TodoType";

export const TodoList = ({
  todoList,
  updateIsCompleted,
}: {
  todoList: TodoType[];
  updateIsCompleted: (todoId: string) => void;
}) => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <TodoItem
            todoId={todo.id}
            key={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            updateIsCompleted={updateIsCompleted}
          ></TodoItem>
        );
      })}
    </div>
  );
};
