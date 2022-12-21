/**
 * Merge two numeric arrays by their first element, prioritizing the lowest value.
 * If both arrays are sorted, the merged array will be sorted too (ascending).
 * Complexity: time O(n), space O(n).
 *
 * @param left Numeric array to be merged.
 * @param right Numeric array to be merged.
 * @returns The first-element low-value-priority merge of the two input arrays.
 */
const merge = (left: number[], right: number[]): number[] => {
  const both: number[] = []

  while ((left.length > 0) && (right.length > 0)) {
    both.push(left[0] < right[0] ? left.shift() : right.shift())
  }

  return [...both, ...left, ...right]
}

/**
 * Sorts numeric array, in ascending order, not-in-place, using Merge Sort.
 * Complexity: time O(n log n), space O(n).
 *
 * @param nums Numeric array to be sorted.
 * @returns Reference to the input array, now sorted.
 */
const mergeSort = (nums: number[]): number[] => {
  if (nums.length < 2) return nums

  const mid = nums.length / 2
  const left = nums.slice(0, mid)
  const right = nums.slice(mid, nums.length)

  return merge(mergeSort(left), mergeSort(right))
}

export default mergeSort
