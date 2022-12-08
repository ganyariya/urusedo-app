import { renderHook, act } from '@testing-library/react';
import { useTimer } from 'renderer/hooks/timer';

/**
 * https://react-hooks-testing-library.com/usage/basic-hooks
 * https://jotai.org/docs/guides/testing
 */

test('use timer', () => {});

describe('Timer', () => {
  it('should be inactive when initialized', () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.timer.active).toBe(false);
    expect(result.current.timer.mode).toBe('Work');
  });

  it('should be active after starting timer', () => {
    const { result } = renderHook(() => useTimer());
    act(() => {
      result.current.startTimer();
    });
    expect(result.current.timer.active).toBe(true);
    expect(result.current.timer.mode).toBe('Work');
  });

  it('should be inactive after resetting timer', () => {
    const { result } = renderHook(() => useTimer());
    act(() => {
      result.current.startTimer();
      result.current.resetTimer();
    });
    expect(result.current.timer.active).toBe(false);
    expect(result.current.timer.mode).toBe('Work');
    expect(result.current.timer.startDate).toBeNull();
  });
});
