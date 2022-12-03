import { atom } from 'jotai';

interface ITimer {
  active: boolean;
  secDuration: number;
  secElapsed: number;
  startDate: Date | null;
}

const DEFAULT_MINUTES_DURATION = 25;
const DEFAULT_SECONDS_DURATION = DEFAULT_MINUTES_DURATION * 60;

const defaultTimer: ITimer = {
  active: false,
  secDuration: DEFAULT_SECONDS_DURATION,
  secElapsed: 0,
  startDate: null,
};

const timerState = atom<ITimer>(defaultTimer);

export { timerState };
