# Sorting Algorithms Implemented in TypeScript

[![typescript][2]][3]
[![linux build & tests][0]][1]
[![linting][4]][5]
[![license MIT][6]][7]
[![ts-standard][8]][9]

This is an exercise to study and practice:

- TypeScript
- Sorting algorithms
- Unit testing
- Profiling
- Documenting
- Version control

## Prompt

Implement, unit test, document, time profile, and memory profile different sorting 
algorithms.

Keep things simple!

- Don't use dependencies unless absolutely necessary.
- Create your own micro-frameworks for unit testing and profiling, if possible.

## Install Dependencies

### Ubuntu

```bash
curl -fsSL https://bun.sh/install | bash # Bun
apt install nodejs npm # Node
npm install # Modules
```

## Usage

### Provided Scripts

You can use the provided scripts to run everything easily. One of the secondary goals 
of the exercise is to informally benchmark the runtime and memory usage of different 
runtimes, including:

- Node
- Bun
- TS-Node
- TSC + Node

The `scripts` directory is where this dynamic is centralized.

#### Running Unit Tests

##### POSIX Shell Scripts

For Unix, Linux, and MacOS, you can use the shell executable files.

```bash
./scripts/unit-tests-bun.sh # Run all unit tests with Bun
./scripts/unit-tests-ts-node.sh # Run all unit tests with TS-Node
./scripts/unit-tests-ts-tsc.sh # Transpile with TSC and run all unit tests with Node
```

## Contribute

Pull requests and code reviews are always welcome!

---

[0]: https://github.com/JCPedroza/sorting-algorithms-ts/actions/workflows/linux.yml/badge.svg
[1]: https://github.com/JCPedroza/sorting-algorithms-ts/actions/workflows/linux.yml
[2]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[3]: https://github.com/microsoft/TypeScript
[4]: https://github.com/JCPedroza/algorithms-and-data-structures-ts/actions/workflows/lint.yml/badge.svg
[5]: https://github.com/JCPedroza/algorithms-and-data-structures-ts/actions/workflows/lint.yml
[6]: https://badgen.net/github/license/JCPedroza/algorithms-and-data-structures-ts
[7]: https://opensource.org/licenses/MIT
[8]: https://badgen.net/badge/style/ts-standard/blue?icon=typescript
[9]: https://github.com/standard/ts-standard
