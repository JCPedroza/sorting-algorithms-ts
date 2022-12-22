const quickRecursiveSortRng = (nums: number[]): number[] => {
  if (nums.length < 2) return nums

  const loop = (left: number, right: number): void => {
    if (left >= right) return

    let idxL = left
    let idxR = right
    const pivot = nums[Math.trunc(Math.random() * (right - left) + left)]

    while (idxL <= idxR) {
      while (nums[idxL] < pivot) idxL++
      while (nums[idxR] > pivot) idxR--
      if (idxL <= idxR) {
        [nums[idxL], nums[idxR]] = [nums[idxR], nums[idxL]]
        idxL++
        idxR--
      }
    }

    loop(left, idxR)
    loop(idxL, right)
  }

  loop(0, nums.length - 1)
  return nums
}

export default quickRecursiveSortRng
