if ! command -v bun
then
    printf "\nThe 'bun' command cannot be found.\n"
    printf "You need Bun installed to run this script.\n\n"
    exit
fi

printf "\n> bun ./tests/sort.test.ts\n\n"
time bun ./tests/sort.test.ts
printf "\n"
