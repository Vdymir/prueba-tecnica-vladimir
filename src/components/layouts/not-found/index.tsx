import { Link } from "@tanstack/react-router";
import { listWithSixPokeBalls } from "../../../constant/list-poke-balls";

export function NotFound() {
  return (
    <main className="h-[100dvh] w-[100dvw]  flex flex-col justify-center items-center gap-5 relative overflow-hidden">
      <h2 className="text-white text-4xl font-semibold">
        This page don't exist
      </h2>
      <Link to="/">
        <span className="text-white text-xl font-semibold underline">
          Go home
        </span>
      </Link>
      {listWithSixPokeBalls.map((item) => (
        <img
          key={item.id}
          alt="poke-bola"
          className={item.className}
          src="/pokebola-blanca.png"
        />
      ))}
    </main>
  );
}
