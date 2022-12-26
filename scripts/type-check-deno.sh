# Typecheck using Deno

find ./algorithms -name "*.ts" -execdir deno check \{\} +;
find ./profile -name "*.ts" -execdir deno check \{\} +;
find ./tests -name "*.ts" -execdir deno check \{\} +;
