/**
 * Unit tests for sorting functions.
 */
import { test, buildId } from './assert.ts'
import sorters from '../algorithms/sort.repo.ts'

for (const sort of sorters) {
  test(buildId(sort.name, '[]'))
    .expect(sort([]))
    .toEqual([])

  test(buildId(sort.name, '[5]'))
    .expect(sort([5]))
    .toEqual([5])

  test(buildId(sort.name, '[1, 2, 3]'))
    .expect(sort([1, 2, 3]))
    .toEqual([1, 2, 3])

  test(buildId(sort.name, '[5, 4, 3, 2, 1]'))
    .expect(sort([5, 4, 3, 2, 1]))
    .toEqual([1, 2, 3, 4, 5])

  test(buildId(sort.name, '[3.4, -6.2, -0.7, 9.8, 1.6, -4.5]'))
    .expect(sort([3.4, -6.2, -0.7, 9.8, 1.6, -4.5]))
    .toEqual([-6.2, -4.5, -0.7, 1.6, 3.4, 9.8])

  console.log(`${sort.name as string} passed all unit tests!`)
}

console.log(`\nPerformed unit tests for ${sorters.length as number} sorting functions.`)
