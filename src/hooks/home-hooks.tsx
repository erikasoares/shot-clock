import { useEffect, useState } from "react";

export default function useChangeHomeState() {
  const [clockValueHome, setClockValueHome] = useState(24);
  const [playHome, setPlayHome] = useState(false);
  const [stopHome, setStopHome] = useState(false);

  useEffect(() => {
    if (playHome) {
      const seconds = setInterval(() => {
        if (playHome && clockValueHome > 0) {
          setClockValueHome(clockValueHome - 1);
        }
      }, 1000);
      return () => clearInterval(seconds);
    }
  }, [clockValueHome, playHome, setClockValueHome]);

  useEffect(() => {
    if (stopHome) {
      setClockValueHome(24);
    }
  }, [stopHome, setClockValueHome]);

  const onClickPlayHome = (value: boolean) => {
    setStopHome(false);
    setPlayHome(value);
  };

  const onClickStopHome = () => {
    setStopHome(true);
    setPlayHome(false);
  };

  return {
    onClickStopHome,
    onClickPlayHome,
    clockValueHome,
  };
}
