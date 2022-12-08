import { atom } from 'jotai';
import { ITimer, DEFAULT_SECONDS_DURATION } from './../types/timer';

const defaultTimer: ITimer = {
  mode: 'Work',
  active: false,
  secDuration: DEFAULT_SECONDS_DURATION,
  secElapsed: 0,
  startDate: null,
};

const timerState = atom<ITimer>(defaultTimer);

export { timerState };
