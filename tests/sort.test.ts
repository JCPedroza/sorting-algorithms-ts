/**
 * Unit tests for sorting functions.
 */

import sorters from '../algorithms/sort.repo'

interface EqualityAssertion {
  toEqual: (numsB: number[]) => void
}

interface Expectation {
  expect: (numsA: number[]) => EqualityAssertion
}

const throwError = (
  why: string,
  id: string,
  numsA: number[],
  numsB: number[]
): void => {
  const strNumsA = String(numsA)
  const strNumsB = String(numsB)
  const msg = `${why}\n${id}\nReturned: [${strNumsA}]\nExpected: [${strNumsB}]`
  throw new Error(msg)
}

const buildId = (fun: string, arg: string) => `${fun}(${arg})`

/**
 * Micro test framework. Asserts equality between two numeric arrays.
 * test(<test name string>).expect(<num array>).toEqual(<num array>)
 *
 * @param id Identifier or name of the test.
 * @returns An Expectation used for assersions.
 */
const test = (id: string): Expectation => ({
  expect: (numsA: number[]): EqualityAssertion => ({
    toEqual: (numsB: number[]): void => {
      if (numsA.length !== numsB.length) { // Arrays of different length are not equal
        throwError('Length difference', id, numsA, numsB)
      }

      for (let idx = 0; idx < numsA.length; idx++) {
        if (numsA[idx] !== numsB[idx]) { // Arrays with different elements are not equal
          throwError('Inequality', id, numsA, numsB)
        }
      }
    }
  })
})

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
}
