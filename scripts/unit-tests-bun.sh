# Run unit tests with Bun

if ! command -v bun
then
  printf '\nThe 'bun' command cannot be found.\n'
  printf 'You need Bun installed to run this script.\n\n'
  exit
fi

printf '\n'
time sh -c 'bun ./tests/sort.test.ts && bun ./tests/prof-utils.test.ts'
printf '\n'
