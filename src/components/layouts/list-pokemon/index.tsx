import { PokemonResult } from "../../../interfaces/pokemon-response.interface";
import { PokemonCard } from "../../ui";

interface Props {
  pokemonList: PokemonResult[];
}
export default function ListPokemons({ pokemonList }: Props) {
  return (
    <section className="grid grid-cols-4 gap-8">
      {pokemonList.map((item) => {
        const urlPath = item.url.split("/");
        const id = urlPath[urlPath.length - 2];
        return <PokemonCard pokemonId={id} />;
      })}
    </section>
  );
}
