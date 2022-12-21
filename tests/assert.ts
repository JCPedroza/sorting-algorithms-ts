/**
 * Assertion utilities.
 */

interface Range {
  from: number
  to: number
}

interface AssertionAggregate {
  toEqual: (numsB: number[]) => AssertionAggregate
  toHaveLength: (length: number) => AssertionAggregate
  toHaveIntegersOnly: () => AssertionAggregate
  toHaveNumbersOnly: () => AssertionAggregate
  toHaveValuesInRange: (range: Range) => AssertionAggregate
  toBeInAscendingOrder: () => AssertionAggregate
  toBeInDescendingOrder: () => AssertionAggregate
}

interface Expectation {
  expect: (numsA: number[]) => AssertionAggregate
}

const throwError = (
  why: string,
  id: string,
  numsA: number[],
  numsB?: any
): void => {
  const strNumsA = String(numsA)
  const strNumsB = (numsB !== undefined && numsB !== null) ? String(numsB) : ''
  const msg = `${why}\n${id}\nReturned: [${strNumsA}]\nExpected: [${strNumsB}]`
  throw new Error(msg)
}

export const buildId =
  (funName: string, arg: string): string => `${funName}(${arg})`

/**
 * Micro test framework. Asserts equality between two numeric arrays.
 * test(<test name string>).expect(<num array>).toEqual(<num array>)
 *
 * @param id Identifier or name of the test.
 * @returns An Expectation used for assersions.
 */
export const test = (id: string): Expectation => ({
  expect: (numsA: number[]): AssertionAggregate => ({
    toEqual: (numsB: number[]): AssertionAggregate => {
      if (numsA.length !== numsB.length) { // Arrays of different length are not equal
        throwError('Length difference', id, numsA, numsB)
      }

      for (let idx = 0; idx < numsA.length; idx++) {
        if (numsA[idx] !== numsB[idx]) { // Arrays with different elements are not equal
          throwError('Inequality', id, numsA, numsB)
        }
      }

      return test(id).expect(numsA)
    },

    toHaveLength: (length: number): AssertionAggregate => {
      if (numsA.length !== length) {
        throwError('Unexpected length', id, numsA, length)
      }

      return test(id).expect(numsA)
    },

    toHaveIntegersOnly: (): AssertionAggregate => {
      if (!numsA.every(num => Number.isInteger(num))) {
        throwError('Non-integer value', id, numsA)
      }

      return test(id).expect(numsA)
    },

    toHaveNumbersOnly: (): AssertionAggregate => {
      if (!numsA.every(num => typeof num === 'number')) {
        throwError('Non-numeric value', id, numsA)
      }

      return test(id).expect(numsA)
    },

    toHaveValuesInRange: (range: Range): AssertionAggregate => {
      if (!numsA.every(num => num >= range.from && num < range.to)) {
        throwError('Value out of range', id, numsA, range)
      }

      return test(id).expect(numsA)
    },

    toBeInAscendingOrder: (): AssertionAggregate => {
      for (let idx = 0; idx < numsA.length - 1; idx++) {
        if (numsA[idx] > numsA[idx + 1]) {
          throwError('Array not in ascending order', id, numsA)
        }
      }

      return test(id).expect(numsA)
    },

    toBeInDescendingOrder: (): AssertionAggregate => {
      for (let idx = 0; idx < numsA.length - 1; idx++) {
        if (numsA[idx] < numsA[idx + 1]) {
          throwError('Array not in descending order', id, numsA)
        }
      }

      return test(id).expect(numsA)
    }
  })
})

export default {
  test,
  buildId
}
