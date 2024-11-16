import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      <p className="font-bold text-2xl">hello word</p>
    </main>
  );
}
