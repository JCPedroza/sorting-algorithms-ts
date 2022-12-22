import nativeSort from './native-sort'
import bubbleSort from './bubble-sort'
import selectionSort from './selection-sort'
import insertionSwapSort from './insertion-swap-sort'
import insertionShiftSort from './insertion-shift-sort'
import mergeSort from './merge-sort'
import heapSort from './heap-sort'

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
  heapSort
]

export default sorters
