import { Fragment } from "react";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { getListPokemons } from "../services";
import Header from "../components/layouts/header";
import ListPokemons from "../components/layouts/list-pokemon";

const pokemonsQueryOptions = queryOptions({
  queryKey: ["pokemons-list"],
  queryFn: () => getListPokemons(),
});

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(pokemonsQueryOptions);
  },
});

function HomePage() {
  const {
    isLoading,
    data: { results },
  } = useSuspenseQuery(pokemonsQueryOptions);

  if (isLoading) return "Loading...";

  return (
    <Fragment>
      <Header />
      <main className="px-36 py-20">
        <ListPokemons pokemonList={results.slice(0, 20)} />
      </main>
    </Fragment>
  );
}
