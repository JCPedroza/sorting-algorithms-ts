type sorter = (nums: number[]) => number[]

// In ms
const runAndTime = (fun: sorter, arg: number[]): [number[], number] => {
  const start = performance.now()
  const funEval = fun(arg)
  const total = performance.now() - start

  return [funEval, total]
}
