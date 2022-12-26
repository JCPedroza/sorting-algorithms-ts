import { test } from './assert.ts'

import {
  randomIntArray,
  randomNumArray,
  ascendingArray,
  descendingArray
} from '../profile/prof-utils.ts'

// There's some non-deterministic unit tests. This is usually a bad idea, but as this
// is an informal exercise, I'm including some of them as an experiment to test
// random number generation.

test('randomIntArray(-10, 10, 20)')
  .expect(randomIntArray(-10, 10, 20))
  .toHaveLength(20)
  .toHaveIntegersOnly()
  .toHaveValuesInRange({ from: -10, to: 10 }) // Non-deterministic!

test('randomNumArray(-10, 10, 20)')
  .expect(randomNumArray(-10, 10, 20))
  .toHaveLength(20)
  .toHaveNumbersOnly()
  .toHaveValuesInRange({ from: -10, to: 10 }) // Non-deterministic!

test('ascendingArray(5)')
  .expect(ascendingArray(5))
  .toEqual([0, 1, 2, 3, 4])

test('descendingArray(5)')
  .expect(descendingArray(5))
  .toEqual([4, 3, 2, 1, 0])

console.log('\nPerformed unit tests for profile utilities.')
