import React from "react";
import Stack from "@mui/material/Stack";
import ShotClock from "./components/shot-clock";
import useChangeHomeState from "./hooks/home-hooks";
import useChangeVisitorState from "./hooks/visitor-hooks";

function App() {
  const { onClickStopHome, onClickPlayHome, clockValueHome } =
    useChangeHomeState();

  const { onClickStopVisitor, onClickPlayVisitor, clockValueVisitor } =
    useChangeVisitorState();

  return (
    <Stack
      direction={"row"}
      sx={{ justifyContent: "center", p: 8 }}
      spacing={3}
    >
      <ShotClock
        clockId={"clockHome"}
        startId={"startHome"}
        stopId={"stopHome"}
        pauseId={"pauseHome"}
        displayTime={clockValueHome}
        onPlay={(value: boolean) => onClickPlayHome(value)}
        onStop={() => onClickStopHome()}
      />

      <ShotClock
        clockId={"clockVisitor"}
        startId={"startVisitor"}
        stopId={"stopVisitor"}
        pauseId={"pauseVisitor"}
        displayTime={clockValueVisitor}
        onPlay={(value: boolean) => onClickPlayVisitor(value)}
        onStop={() => onClickStopVisitor()}
      />
    </Stack>
  );
}

export default App;
