import { atom } from 'jotai';

type Mode = 'Work' | 'Rest' | 'Idle';

const modeState = atom<Mode>('Work');

export { modeState, Mode };
