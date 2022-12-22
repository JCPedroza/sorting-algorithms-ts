/**
 * Organizes subtree as a max heap, and recursively operates on affected subtrees.
 * Non-recursive implementation using a stack.
 *
 * @param tree Array representation of a binary tree.
 * @param size Size of heap.
 * @param root Index of root nextNode.
 */
const heapify = (tree: number[], size: number, root: number): void => {
  const stack = [root]

  while (stack.length > 0) {
    const nextNode = stack.pop() as number
    const leftChild = nextNode * 2 + 1
    const rightChild = leftChild + 1
    let max = nextNode

    if (leftChild < size && tree[leftChild] > tree[max]) {
      max = leftChild
    }

    if (rightChild < size && tree[rightChild] > tree[max]) {
      max = rightChild
    }

    if (max !== nextNode) {
      [tree[nextNode], tree[max]] = [tree[max], tree[nextNode]]
      stack.push(max)
    }
  }
}

/**
 * Sorts numeric array, in ascending order, in-place, using Heap Sort.
 * Complexity: time O(n log n), space O(n).
 *
 * @param nums Numeric array to be sorted.
 * @returns Reference to the input array, now sorted.
 */
const heapStackSort = (nums: number[]): number[] => {
  // Organize array into a heap
  for (let idx = Math.trunc(nums.length / 2 - 1); idx >= 0; idx--) {
    heapify(nums, nums.length, idx)
  }

  // Extract root node (max value) from heap until heap is empty
  for (let idx = nums.length - 1; idx >= 0; idx--) {
    [nums[0], nums[idx]] = [nums[idx], nums[0]]
    heapify(nums, idx, 0)
  }

  return nums
}

export default heapStackSort
