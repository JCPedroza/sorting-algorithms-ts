const rng =
  (from: number, to: number): number =>
    Math.random() * (to - from) + from

const randomInt =
  (from: number, to: number): number =>
    Math.trunc(rng(from, to))

const randomNum =
  (from: number, to: number): number =>
    rng(from, to)

export const randomIntArray = (from: number, to: number, size: number): number[] => {
  const array = []

  for (let idx = 0; idx < size; idx++) {
    array.push(randomInt(from, to))
  }

  return array
}

export const randomNumArray = (from: number, to: number, size: number): number[] => {
  const array = []

  for (let idx = 0; idx < size; idx++) {
    array.push(randomNum(from, to))
  }

  return array
}

export const ascendingArray = (size: number): number[] => {
  const array = []

  for (let idx = 0; idx < size; idx++) {
    array.push(idx)
  }

  return array
}

export const descendingArray = (size: number): number[] => {
  const array = []

  for (let idx = size - 1; idx >= 0; idx--) {
    array.push(idx)
  }

  return array
}

export default {
  randomIntArray,
  randomNumArray,
  ascendingArray,
  descendingArray
}
