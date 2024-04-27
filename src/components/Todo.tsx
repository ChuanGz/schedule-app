import { Button } from "@mui/material";
import "../index.css";
export const Todo = (name: { name: string }) => {
  return (
    <Button variant="outlined" fullWidth style={{ justifyContent: "start" }}>
      {name.name}
    </Button>
  );
};
