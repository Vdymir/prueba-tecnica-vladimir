import { Link } from "@tanstack/react-router";

export function NavBar() {
  return (
    <nav className="flex justify-center items-center p-2">
      <Link to="/">
        <img alt="pokemon-logo" src="/logo.png" className="h-28 object-cover" />
      </Link>
    </nav>
  );
}
