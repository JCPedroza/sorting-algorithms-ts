/**
 * Sorts numeric array, in ascending order, in-place, using the sort implementation
 * provided by the runtime.
 * Complexity: Depends on the runtime's sort implementation.
 *
 * @param nums Numeric array to be sorted.
 * @returns Reference to the input array, now sorted.
 */
const nativeSort =
  (nums: number[]): number[] =>
    nums.sort((a, b) => a - b)

export default nativeSort
