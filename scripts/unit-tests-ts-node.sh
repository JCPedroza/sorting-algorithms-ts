if ! command -v node
then
    printf "\nThe 'node' command cannot be found.\n"
    printf "You need NodeJS installed to run this script.\n\n"
    exit
fi

if ! command -v npm
then
    printf "\nThe 'npm' command cannot be found.\n"
    printf "You need NPM installed to run this script.\n\n"
    exit
fi

printf "\n> npm run test-ts-node\n"
time npm run test-ts-node
printf "\n"
