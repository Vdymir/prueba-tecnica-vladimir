import { Fragment } from "react";
import { createFileRoute } from "@tanstack/react-router";

import Header from "../components/layouts/header";
import ListPokemons from "../components/layouts/list-pokemon";
import { PaginationControls, SearchInput } from "../components/ui";
import useFilterPokemons, {
  pokemonsQueryOptions,
} from "../hooks/useFilterPokemons";

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(pokemonsQueryOptions);
  },
});

function HomePage() {
  const {
    isLoading,
    handleSearch,
    paginatedPokemon,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useFilterPokemons();

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) return "Loading...";

  return (
    <Fragment>
      <Header />
      <main className="px-36 py-10 flex flex-col gap-7">
        <SearchInput onChangeText={handleSearch} />
        <ListPokemons pokemonList={paginatedPokemon} />
        <PaginationControls
          currentPage={currentPage}
          onPageChange={handleChangePage}
          totalPages={totalPages}
        />
      </main>
    </Fragment>
  );
}
