import { Button } from "@mui/material";
import "../index.css";
export const Todo = (name: { name: string }) => {
  return (
    <Button fullWidth style={{ justifyContent: "start" }}>
      {name.name}
    </Button>
  );
};
