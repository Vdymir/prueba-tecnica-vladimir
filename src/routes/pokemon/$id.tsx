import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { getPokemonById } from "../../services";
import { typeColors } from "../../lib/typeColor";
import { NavBar } from "../../components/layouts";
import { TypeIcon } from "../../components/ui";
import { ENVIRONMENT } from "../../constant/environment";
import { listWithSixPokeBalls } from "../../constant/list-poke-balls";

export const Route = createFileRoute("/pokemon/$id")({
  component: PokemonsByIdPage,
});

function PokemonsByIdPage() {
  const { id } = Route.useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemonById(Number(id)),
  });
  const mainType = data?.types[0]?.type.name || "normal";

  if (isLoading || !data) return null;

  return (
    <main
      className={`${typeColors[mainType]} bg-opacity-60 h-[100dvh] w-[100dvw] relative overflow-hidden `}
    >
      <NavBar />
      {listWithSixPokeBalls.map((item) => (
        <img
          key={item.id}
          alt="poke-bola"
          className={item.className}
          src="/pokebola-blanca.png"
        />
      ))}
      <section className="flex items-center justify-between px-52">
        <div>
          <h1 className="text-[5rem] text-white font-bold uppercase drop-shadow-2xl">
            {data.name}
          </h1>
          <div className="flex items-center gap-2 mb-4">
            {data.types.map(({ type }) => (
              <TypeIcon type={type.name} key={type.name} withName />
            ))}
          </div>
          <h4 className="text-white text-3xl font-bold uppercase">Ability:</h4>
          <ul>
            {data.abilities.map((ability) => (
              <li className="text-white text-xl font-semibold capitalize">
                - {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            src={`${ENVIRONMENT.image_url}${data.id}.png`}
            alt={data.name}
            className="drop-shadow-lg shadow-black h-[600px] w-[600px]"
          />
        </div>
      </section>
    </main>
  );
}
