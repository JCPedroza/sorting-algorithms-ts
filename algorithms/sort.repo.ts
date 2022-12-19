import bubbleSort from './bubble-sort'
import selectionSort from './selection-sort'
import insertionSwapSort from './insertion-swap-sort'
import insertionShiftSort from './insertion-shift-sort'

/**
 * Collection of sort functions.
 */
const sorters = [
  bubbleSort,
  selectionSort,
  insertionSwapSort,
  insertionShiftSort
]

export default sorters
