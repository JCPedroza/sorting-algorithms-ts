/**
 * Sorts number array in-place using Selection Sort.
 * Complexity: time AO(n²) WO(n²) BO(n²), space TO(n) AO(1).
 *
 * @param nums Number array to be sorted.
 * @returns Reference to the input array, now sorted.
 */
const selectionSort = (nums: number[]): number[] => {
  for (let loop = 0; loop < nums.length; loop++) {
    let maxIdx = loop

    for (let idx = loop; idx < nums.length; idx++) {
      if (nums[idx] < nums[maxIdx]) {
        maxIdx = idx
      }
    }

    [nums[loop], nums[maxIdx]] = [nums[maxIdx], nums[loop]]
  }

  return nums
}

export default selectionSort
