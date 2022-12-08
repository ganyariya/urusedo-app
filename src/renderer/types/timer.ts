import { Mode } from './mode';

interface ITimer {
  mode: Mode;
  active: boolean;
  secDuration: number;
  secElapsed: number;
  startDate: Date | null;
}

const DEFAULT_MINUTES_DURATION = 25;
const DEFAULT_SECONDS_DURATION = DEFAULT_MINUTES_DURATION * 60;

export { ITimer, DEFAULT_SECONDS_DURATION };
