import { Fragment } from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { NotFound } from "../components/layouts";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent,
    notFoundComponent: NotFound,
  }
);

function RootComponent() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}
