import sorters from '../algorithms/sort.repo'

import {
  ascendingArray,
  descendingArray,
  randomIntArray,
  randomNumArray,
  shuffleArray
} from './prof-utils'

type SortFun = (nums: number[]) => number[]

enum Mode {
  Ascending,
  Descending,
  RandomInt,
  RandomNum
}

interface Range {
  from: number
  to: number
}

interface ProfileOptions {
  size: number
  mode: Mode
  range?: Range
}

interface ProfileResult {
  size: number
  id: string
  time: number
}

const optionsToNums = (options: ProfileOptions): number[] => {
  if (options.range === undefined) options.range = { from: -1, to: -1 }

  switch (options.mode) {
    case Mode.Ascending:
      return ascendingArray(options.size)
    case Mode.Descending:
      return descendingArray(options.size)
    case Mode.RandomInt:
      return randomIntArray(options.size, options.range.from, options.range.to)
    case Mode.RandomNum:
      return randomNumArray(options.size, options.range.from, options.range.to)
  }
}

// In ms
const runAndTime = (sorter: SortFun, arg: number[]): ProfileResult => {
  const start = performance.now()
  sorter(arg)
  const total = performance.now() - start

  return {
    size: arg.length,
    time: total,
    id: sorter.name
  }
}

const timeProfile =
  (sorter: SortFun, options: ProfileOptions): ProfileResult =>
    runAndTime(sorter, optionsToNums(options))

const targetOptions = [
  { size: 0, mode: Mode.Descending },
  { size: 1, mode: Mode.Descending },
  { size: 10, mode: Mode.Descending },
  { size: 100, mode: Mode.Descending },
  { size: 1_000, mode: Mode.Descending },
  { size: 10_000, mode: Mode.Descending }
]

const results = new Map()
const iters = 10

for (const options of targetOptions) {
  const funResults = new Map()

  for (const sorter of sorters) {
    funResults.set(
      sorter.name,
      { size: options.size, id: sorter.name, time: Infinity }
    )
  }

  results.set(options.size, funResults)
}

console.log(`\nProfiling time for ${iters} iterations.`)

for (let iter = 0; iter < iters; iter++) {
  console.log(`  Performing iteration ${iter + 1}.`)

  for (const options of targetOptions) {
    shuffleArray(sorters)

    for (const sorter of sorters) {
      const minRes = results.get(options.size).get(sorter.name)
      const res = timeProfile(sorter, options)

      if (res.time < minRes.time) {
        results.get(options.size).set(sorter.name, res)
      }
    }
  }
}

console.log(results)
