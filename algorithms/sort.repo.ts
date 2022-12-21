import bubbleSort from './bubble-sort'
import selectionSort from './selection-sort'
import insertionSwapSort from './insertion-swap-sort'
import insertionShiftSort from './insertion-shift-sort'
import mergeSort from './merge-sort'
import nativeSort from './native-sort'

/**
 * Collection of sort functions for use in testing, profiling, etc.
 */
const sorters = [
  bubbleSort,
  selectionSort,
  insertionSwapSort,
  insertionShiftSort,
  mergeSort,
  nativeSort
]

export default sorters
