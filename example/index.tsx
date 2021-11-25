import { useMemo, lazy } from "react";
import RouterConfig, { RouteType } from "../src/index";

export default function Router() {
  const routes = useMemo<RouteType[]>(
    () => [
      {
        pathname: "/home",
        private: true,
        component: lazy(() => import("./Home")),
      },
    ],
    []
  );
  return <RouterConfig type="hash" routes={routes} />;
}