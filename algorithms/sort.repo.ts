import nativeSort from './native-sort'
import bubbleSort from './bubble-sort'
import selectionSort from './selection-sort'
import insertionSwapSort from './insertion-swap-sort'
import insertionShiftSort from './insertion-shift-sort'
import mergeSort from './merge-sort'
import heapRecursiveSort from './heap-recursive-sort'
import heapStackSort from './heap-stack-sort'
import heapFlagSort from './heap-flag-sort'

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
  heapFlagSort
]

export default sorters
