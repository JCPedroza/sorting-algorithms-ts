if ! command -v bun
then
  printf "\nThe 'bun' command cannot be found.\n"
  printf "You need Bun installed to run this script.\n\n"
  exit
fi

time sh -c 'bun ./profile/time.ts'
printf '\n'
