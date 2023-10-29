import { useEffect, useState } from "react";

export default function useChangeVisitorState() {
  const [clockValueVisitor, setClockValueVisitor] = useState(24);
  const [playVisitor, setPlayVisitor] = useState(false);
  const [stopVisitor, setStopVisitor] = useState(false);

  useEffect(() => {
    if (playVisitor) {
      const seconds = setInterval(() => {
        if (playVisitor && clockValueVisitor > 0) {
          setClockValueVisitor(clockValueVisitor - 1);
        }
      }, 1000);
      return () => clearInterval(seconds);
    }
  }, [clockValueVisitor, playVisitor, setClockValueVisitor]);

  useEffect(() => {
    if (stopVisitor) {
      setClockValueVisitor(24);
    }
  }, [stopVisitor, clockValueVisitor]);

  const onClickPlayVisitor = (value: boolean) => {
    setStopVisitor(false);
    setPlayVisitor(value);
  };

  const onClickStopVisitor = () => {
    setStopVisitor(true);
    setPlayVisitor(false);
  };

  return {
    onClickStopVisitor,
    onClickPlayVisitor,
    clockValueVisitor,
  };
}
