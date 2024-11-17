import { Link } from "@tanstack/react-router";

export function NavBar() {
  return (
    <nav className="flex justify-center items-center">
      <Link to="/">
        <img
          alt="pokemon-logo"
          src="/logo.png"
          className="h-24 lg:h-52 object-cover"
        />
      </Link>
    </nav>
  );
}
