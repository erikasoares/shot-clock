import React, { memo } from "react";
import Stack from "@mui/material/Stack";
import { Display, Clock } from "../styled";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import IconButton from "@mui/material/IconButton";

export interface ShotClockProps {
  clockId: string;
  startId: string;
  stopId: string;
  pauseId: string;
  displayTime: number;
  onPlay: (value: boolean) => void;
  onStop: Function;
}

const ShotClock = ({
  clockId,
  startId,
  stopId,
  pauseId,
  displayTime,
  onPlay,
  onStop,
}: ShotClockProps) => {
  return (
    <Stack
      direction={"column"}
      sx={{ textAlign: "center" }}
      data-testid={clockId}
    >
      <Display>
        <Clock>{displayTime}</Clock>
      </Display>
      <Stack direction={"row"} spacing={3} sx={{ justifyContent: "center" }}>
        <IconButton
          onClick={() => onPlay(true)}
          disableRipple
          data-testid={startId}
        >
          <PlayCircleFilledWhiteIcon />
        </IconButton>
        <IconButton
          onClick={() => onPlay(false)}
          disableRipple
          data-testid={pauseId}
        >
          <PauseCircleIcon />
        </IconButton>
        <IconButton onClick={() => onStop()} disableRipple data-testid={stopId}>
          <StopCircleIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default memo(ShotClock);
