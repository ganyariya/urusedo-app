import { useAtom } from 'jotai';
import { SetStateAction, useEffect } from 'react';
import { timerState } from 'renderer/atoms/timer';
import { ITimer } from '../types/timer';

const getSetTimerHandler = (
  setTimer: (update: SetStateAction<ITimer>) => void,
  props: Partial<ITimer>
) => {
  return () => {
    setTimer((prev) => {
      return {
        ...prev,
        ...props,
      };
    });
  };
};

const useTimer = () => {
  const [timer, setTimer] = useAtom(timerState);

  useEffect(() => {
    const intervalId = setInterval(() => {}, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const startTimer = getSetTimerHandler(setTimer, {
    active: true,
    startDate: new Date(),
  });
  const resetTimer = getSetTimerHandler(setTimer, {
    mode: 'Work',
    active: false,
    startDate: null,
    secElapsed: 0,
  });

  return { timer, startTimer, resetTimer };
};

export { useTimer };
