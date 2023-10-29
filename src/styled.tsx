import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

export const Display = styled(Stack)({
  border: "1px solid rgba(39, 37, 37, 0.15);",
  backgroundColor: "#333131",
  borderRadius: 32,
  height: "200px",
  width: "200px",
  fontSize: "-webkit-xxx-large;",
  justifyContent: "center",
});

export const Clock = styled("span")({
  fontFamily: "'Press Start 2P', sans-serif",
  color: "#db4242",
});
