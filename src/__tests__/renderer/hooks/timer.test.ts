import { renderHook, act } from '@testing-library/react';
import { useTimer } from 'renderer/hooks/timer';

/**
 * https://react-hooks-testing-library.com/usage/basic-hooks
 * https://jotai.org/docs/guides/testing
 */

test('use timer', () => {});

describe('Timer', () => {
  it('should be inactive when initialized', () => {
    const { result } = renderHook(() => useTimer('Work'));
    expect(result.current.timer.active).toBe(false);
  });
  it('should be active after starting timer', () => {
    const { result } = renderHook(() => useTimer('Work'));
    act(() => {
      result.current.startTimer();
    });

    expect(result.current.timer.active).toBe(true);
  });
});
