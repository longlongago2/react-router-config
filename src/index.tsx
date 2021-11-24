import { ElementType, ReactElement, LazyExoticComponent, memo } from "react";
import * as H from "history";

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
  routes: RouteType[];
  beforeEach: (location: H.Location, next: () => void) => void;
  privateHandler: object;
}

function RouterConfig(props: RouterConfigProps) {
  return <div>1</div>;
}

export default memo(RouterConfig);
