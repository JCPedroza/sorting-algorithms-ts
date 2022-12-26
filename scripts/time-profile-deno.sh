if ! command -v deno
then
  printf "\nThe 'deno' command cannot be found.\n"
  printf "You need Deno installed to run this script.\n\n"
  exit
fi

time sh -c 'deno run ./profile/time.ts'
printf '\n'
