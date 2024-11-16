import { useQuery } from "@tanstack/react-query";
import { getRandomNumber } from "../../../lib/numbers";
import { NavBar } from "../navbar";
import { getPokemonById } from "../../../services";
import { typeColors } from "../../../lib/typeColor";
import { TypeIcon } from "../../ui";

const randomNumber = getRandomNumber(1, 1000);
const listPokeBolas = [
  { className: "absolute top-[-100px] right-[-50px] opacity-35", id: 1 },
  { className: "absolute bottom-[-100px] left-0 opacity-35", id: 2 },
  { className: "absolute top-24 left-0 opacity-35 h-52 w-52", id: 3 },
  { className: "absolute bottom-24 right-[250px] opacity-35 h-52 w-52", id: 4 },
];

export default function Header() {
  const { isPending, data } = useQuery({
    queryKey: ["pokemon", randomNumber],
    queryFn: () => getPokemonById(randomNumber),
  });
  const mainType = data?.types[0]?.type.name || "normal";

  return (
    <header
      className={`${typeColors[mainType]} bg-opacity-50 h-[650px] rounded-b-full overflow-hidden relative`}
    >
      <NavBar />
      {!isPending && data ? (
        <div className="flex items-center justify-center gap-14 mt-9">
          <div className="w-96 flex flex-col gap-4">
            <h1 className="font-bold text-6xl text-white capitalize drop-shadow">
              {data.name}
            </h1>
            <div className="flex items-center gap-2">
              {data.types.map(({ type }) => (
                <TypeIcon type={type.name} key={type.name} />
              ))}
            </div>
            <p className="text-white text-sm">
              {data.name.toUpperCase()} Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Similique velit et facilis itaque eius cumque
              beatae esse consectetur natus laudantium veniam officiis, autem
              numquam placeat, ex est ullam sit? Maiores?
            </p>
          </div>
          <div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt={data.name}
              className="drop-shadow-lg shadow-black h-[400px] w-[400px]"
            />
          </div>
          {listPokeBolas.map((item) => (
            <img
              key={item.id}
              src="/pokebola-blanca.png"
              className={item.className}
            />
          ))}
        </div>
      ) : null}
    </header>
  );
}
