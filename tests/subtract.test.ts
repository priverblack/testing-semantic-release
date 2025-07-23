import { describe, expect, test } from 'vitest';
import { subtract } from '../src/subtract.js';

describe('subtract', () => {
  test('basic test', () => {
    expect(subtract(1, 2)).toBe(-1);
  });
});
