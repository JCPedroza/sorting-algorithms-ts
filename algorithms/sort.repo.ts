import nativeSort from './native-sort.ts'
import bubbleSort from './bubble-sort.ts'
import selectionSort from './selection-sort.ts'
import insertionSwapSort from './insertion-swap-sort.ts'
import insertionShiftSort from './insertion-shift-sort.ts'
import mergeSort from './merge-sort.ts'
import heapRecursiveSort from './heap-recursive-sort.ts'
import heapStackSort from './heap-stack-sort.ts'
import heapFlagSort from './heap-flag-sort.ts'
import quickRecursiveSortNoRng from './quick-recursive-sort-no-rng.ts'
import quickRecursiveSortRng from './quick-recursive-sort-rng.ts'

/**
 * Collection of all sort functions for use in testing, profiling, etc.
 */
const sorters = [
  nativeSort,
  bubbleSort,
  selectionSort,
  insertionSwapSort,
  insertionShiftSort,
  mergeSort,
  heapRecursiveSort,
  heapStackSort,
  heapFlagSort,
  quickRecursiveSortNoRng,
  quickRecursiveSortRng
]

export default sorters
