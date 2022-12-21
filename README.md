# Sorting Algorithms Implemented in TypeScript

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
