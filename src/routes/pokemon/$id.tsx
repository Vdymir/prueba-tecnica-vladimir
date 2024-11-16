import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemon/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /pokemon/$id!";
}
