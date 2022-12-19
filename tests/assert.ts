/**
 * Assertion utilities.
 */

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

export const buildId = (fun: string, arg: string) => `${fun}(${arg})`

/**
 * Micro test framework. Asserts equality between two numeric arrays.
 * test(<test name string>).expect(<num array>).toEqual(<num array>)
 *
 * @param id Identifier or name of the test.
 * @returns An Expectation used for assersions.
 */
export const test = (id: string): Expectation => ({
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

export default {
  test,
  buildId
}
