import { ChangeEvent } from "react";

export type AddNewToDoProps = {
  newToDoName: string;
  onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddClick: () => void;
};
