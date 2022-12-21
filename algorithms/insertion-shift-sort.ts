/**
 * Sorts numeric array, in ascending order, in-place, using Insertion Sort.
 * This version does one comparison and one swap per iteration. Other movements are
 * shifts instead of swaps, having the data moved around when compared to the
 * swap heavy version.
 * Complexity: time AO(n²) WO(n²) BO(n), space TO(n) AO(1).
 *
 * @param nums Numeric array to be sorted.
 * @returns Reference to the input array, now sorted.
 */
const insertionShiftSort = (nums: number[]): number[] => {
  for (let loop = 1; loop < nums.length; loop++) {
    const num = nums[loop]
    let idx = loop

    // Value is the new minimum
    if (nums[0] > nums[idx]) {
      while (idx > 0) {
        nums[idx] = nums[idx - 1] // shift to the right
        idx--
      }

      nums[0] = num
    // Not the new minimum, find its correct place
    } else {
      while (nums[idx - 1] > num) {
        nums[idx] = nums[idx - 1] // shift to the right
        idx--
      }

      nums[idx] = num
    }
  }

  return nums
}

export default insertionShiftSort
