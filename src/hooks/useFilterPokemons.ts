import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PokemonResult } from "../interfaces/pokemon-response.interface";
import { getListPokemons } from "../services";

export const pokemonsQueryOptions = queryOptions({
  queryKey: ["pokemons-list"],
  queryFn: () => getListPokemons(),
});

export default function useFilterPokemons() {
  const {
    isLoading,
    data: { results },
  } = useSuspenseQuery(pokemonsQueryOptions);
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonResult[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const limit = 20;

  const paginatedPokemon = filteredPokemon.slice(
    (currentPage - 1) * limit,
    currentPage * limit
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const filtered = results.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPokemon(filtered);
    setTotalPages(Math.ceil(filtered.length / limit));
    setCurrentPage(1);
  }, [searchQuery, results]);

  return {
    isLoading,
    handleSearch,
    paginatedPokemon,
    totalPages,
    currentPage,
    setCurrentPage,
  };
}
