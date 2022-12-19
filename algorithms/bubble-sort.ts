/**
 * Sorts number array in-place using Bubble Sort.
 * Complexity: time AO(n²) WO(n²) BO(n), space TO(n) AO(1).
 *
 * @param nums Number array to be sorted.
 * @returns Reference to the input array, now sorted.
 */
const bubbleSort = (nums: number[]): number[] => {
  for (let loop = 0; loop < nums.length - 1; loop++) {
    let sorted = true

    // In each loop iteration the sorted portion of the array increases by one,
    // hence the '- loop' in 'idx < nums.length - loop - 1'.
    for (let idx = 0; idx < nums.length - loop - 1; idx++) {
      if (nums[idx] > nums[idx + 1]) {
        [nums[idx], nums[idx + 1]] = [nums[idx + 1], nums[idx]]
        sorted = false
      }
    }

    if (sorted) break
  }

  return nums
}

export default bubbleSort
