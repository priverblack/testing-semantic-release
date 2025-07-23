import { describe, expect, test } from 'vitest';
import { add } from '../src/add.js';

describe('add', () => {
  test('basic test', () => {
    expect(add(1, 2)).toBe(3);
  });
});
