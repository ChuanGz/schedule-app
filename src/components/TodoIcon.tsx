import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";

export const TodoIcon = ({ isCompleted }: { isCompleted: boolean }) => {
  return <div>{isCompleted ? <CheckBox /> : <CheckBoxOutlineBlank />}</div>;
};
