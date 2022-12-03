import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Mode, modeState } from 'renderer/atoms/mode';
import { timerState } from 'renderer/atoms/timer';

const useTimer = (mode: Mode) => {
  const [timer, setTimer] = useAtom(timerState);

  useEffect(() => {
    const intervalId = setInterval(() => {}, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const startTimer = () => {
    setTimer((prev) => {
      return {
        ...prev,
        active: true,
        startDate: new Date(),
      };
    });
  };

  return { timer, startTimer };
};

export { useTimer };
