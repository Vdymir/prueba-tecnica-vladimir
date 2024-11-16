import { useQuery } from "@tanstack/react-query";

import { getPokemonById } from "../../../services";
import { TypeIcon } from "../type-icon";
import { typeGradient } from "../../../lib/typeGradient";

interface Props {
  pokemonId: string;
}

const listPokeBolas = [
  { className: "absolute top-20 right-[-100px] opacity-10 h-60 w-60", id: 1 },
  {
    className: "absolute bottom-[-40px] left-[-40px] opacity-10 h-32 w-32",
    id: 2,
  },
  {
    className: "absolute top-[-40px] left-[-40px] opacity-10 h-32 w-32",
    id: 2,
  },
];

export function PokemonCard({ pokemonId }: Props) {
  const { isLoading, data } = useQuery({
    queryKey: ["pokemon", pokemonId],
    queryFn: () => getPokemonById(Number(pokemonId)),
  });
  const type = data?.types[0].type.name || "normal";

  if (isLoading || !data) {
    return (
      <div role="status" className="max-w-sm animate-pulse flex justify-center">
        <div className="h-[400px] w-[300px] bg-gray-200 rounded-3xl dark:bg-gray-700"></div>
      </div>
    );
  }

  return (
    <div className="relative w-[300px] flex justify-center hover:scale-110 transition-all">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
        alt={data.name}
        className="drop-shadow-lg shadow-black h-[250px] mt-[-50px] z-10 absolute"
      />
      <div
        className={`${typeGradient[type]} h-[350px] w-[300px] rounded-3xl border-[0.3px] border- border-opacity-50 flex flex-col items-center p-3 relative overflow-hidden`}
      >
        {listPokeBolas.map((item) => (
          <img
            key={item.id}
            alt="poke-bola"
            className={item.className}
            src="/pokebola-blanca.png"
          />
        ))}

        <h4 className="text-white text-2xl uppercase font-bold mt-52">
          {data.name}
        </h4>
        <div className="flex items-center gap-5 mt-5">
          {data.types.map(({ type }) => (
            <TypeIcon type={type.name} key={type.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
