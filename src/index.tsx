import React, { memo, Suspense } from "react";
import * as H from "history";
import { BrowserRouter, HashRouter } from "react-router-dom";
import RouteConfig, { RoutesProps } from "./Routes";

export interface RouterConfigProps extends RoutesProps {
  type?: "hash" | "browser";
  fallback?: NonNullable<React.ReactNode> | null;
  onRouterChange?: (location: H.Location, action: string) => void;
}

function RouterConfig(props: RouterConfigProps) {
  const { type, fallback, onRouterChange, ...restProps } = props;
  const Router = type === "hash" ? HashRouter : BrowserRouter;
  const _fallback = fallback || "loading";
  return (
    <Suspense fallback={_fallback}>
      <Router>
        <RouteConfig {...restProps} />
      </Router>
    </Suspense>
  );
}

export default memo(RouterConfig);
