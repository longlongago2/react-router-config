import { ElementType, ReactElement, LazyExoticComponent, memo } from "react";
import * as H from "history";
import PrivateRoute from "./PrivateRoute";

export interface LayoutType {
  component: ElementType;
  props?: (props: any) => void;
  fallback?: ReactElement | HTMLElement;
}

export interface RouteType {
  pathname: string;
  component: LazyExoticComponent<any> | ElementType;
  exact?: boolean;
  private?: boolean;
  redirect?: string;
  children?: RouteType[];
  layout?: ElementType | LayoutType;
}

export interface RouterConfigProps {
  type?: "hash" | "browser";
  routes: RouteType[];
  beforeEach?: (location: H.Location, next: () => void) => void;
  privateHandler?: object;
}

function RouterConfig(props: RouterConfigProps) {
  const { type } = props;
  return <div>1</div>;
}

export default memo(RouterConfig);
