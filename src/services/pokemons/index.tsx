import {
  Pokemon,
  PokemonPaginationResponse,
} from "../../interfaces/pokemon-response.interface";

export async function getListPokemons() {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch List Pokémon");
  }
  return (await response.json()) as PokemonPaginationResponse;
}

export async function getPokemonById(id: number) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon by id");
  }
  const data = (await response.json()) as Pokemon;
  console.log({ data });
  return data;
}
