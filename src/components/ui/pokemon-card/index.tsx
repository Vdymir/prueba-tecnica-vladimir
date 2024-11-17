import { useQuery } from "@tanstack/react-query";

import { getPokemonById } from "../../../services";
import { TypeIcon } from "../type-icon";
import { typeGradient } from "../../../lib/typeGradient";
import { Link } from "@tanstack/react-router";
import { listWithThreePokeBalls } from "../../../constant/list-poke-balls";
import { ENVIRONMENT } from "../../../constant/environment";

interface Props {
  pokemonId: string;
}

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
    <Link to="/pokemon/$id" params={{ id: pokemonId }}>
      <div className="relative w-44 lg:w-[300px] flex justify-center hover:scale-110 transition-all">
        <img
          src={`${ENVIRONMENT.image_url}${data.id}.png`}
          alt={data.name}
          className="drop-shadow-lg shadow-black h-32 lg:h-[250px] mt-[-50px] z-10 absolute"
        />
        <div
          className={`${typeGradient[type]} w-44 h-48 lg:h-[350px] lg:w-[300px] rounded-3xl border-[0.3px] border- border-opacity-50 flex flex-col items-center p-3 relative overflow-hidden`}
        >
          {listWithThreePokeBalls.map((item) => (
            <img
              key={item.id}
              alt="poke-bola"
              className={item.className}
              src="/pokebola-blanca.png"
            />
          ))}

          <h4 className="text-white text-2xl uppercase font-bold mt-16 lg:mt-52">
            {data.name}
          </h4>
          <div className="flex items-center gap-5 mt-5">
            {data.types.map(({ type }) => (
              <TypeIcon type={type.name} key={type.name} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
