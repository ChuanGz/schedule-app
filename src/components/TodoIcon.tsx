import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

export const TodoIcon = ({
  todoId,
  isCompleted,
  updateIsCompleted,
}: {
  todoId: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
}) => {
  return (
    <div onClick={() => updateIsCompleted(todoId)}>
      {isCompleted ? <CheckBox /> : <CheckBoxOutlineBlank />}
    </div>
  );
};
