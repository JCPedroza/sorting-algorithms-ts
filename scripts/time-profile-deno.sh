# Run time profiling using Deno as runtime
# The --allow-hrtime flag is needed for high resolution times

if ! command -v deno
then
  printf "\nThe 'deno' command cannot be found.\n"
  printf "You need Deno installed to run this script.\n\n"
  exit
fi

time sh -c 'deno run --allow-hrtime ./profile/time.ts'
printf '\n'
