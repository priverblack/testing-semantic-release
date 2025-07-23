import { describe, expect, test } from 'vitest';
import { times } from '../src/times.js';

describe('times', () => {
  test('basic test', () => {
    expect(times(1, 2)).toBe(2);
  });
});
