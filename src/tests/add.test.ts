import { describe, expect, test } from 'vitest';
import { add } from '../add.js';

describe('add', () => {
  test('basic test', () => {
    expect(add(1, 2)).toBe(3);
  });
});
