import { useMemo, lazy } from "react";
import RouterConfig from "../src/index";
import { RouteType } from "../src/Routes";

const Home = lazy(() => import("./Home"))

export default function Router() {
  const routes = useMemo<RouteType[]>(
    () => [
      {
        path: "/home",
        private: true,
        element: <Home />,
      },
    ],
    []
  );
  return <RouterConfig type="hash" routes={routes} />;
}
