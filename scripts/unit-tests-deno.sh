if ! command -v deno
then
    printf "\nThe 'deno' command cannot be found.\n"
    printf "You need Deno installed to run this script.\n\n"
    exit
fi

printf "\n> deno ./tests/sort.test.ts\n\n"
time deno ./tests/sort.test.ts
printf "\n"
