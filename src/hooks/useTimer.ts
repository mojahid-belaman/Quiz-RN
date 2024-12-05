import { useRef, useState } from "react";

export const useTimer = (time: number = 20) => {
  const [timer, setTimer] = useState(time);
  let timerRef = useRef<NodeJS.Timeout>();

  function startTimer() {
    setTimer(time);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
  }

  return { timer, startTimer, stopTimer };
};
