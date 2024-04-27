import { Button } from "@mui/material";
import "../index.css";
import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
export const TodoItem = (name: { name: string }) => {
  return (
    <Button
      fullWidth
      style={{ justifyContent: "space-between" }}
      endIcon={<CheckBoxOutlineBlankOutlined />}
    >
      {name.name}
    </Button>
  );
};
