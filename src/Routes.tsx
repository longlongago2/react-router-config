import { memo } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import * as H from "history";

export interface RouteType extends RouteObject {
  redirect?: string; // 重定向：优先级较高，匹配到路由后立即重定向到指定路由，private 失效：实现原理是对 <Navigate to={redirectURL} /> 的应用
  private?: boolean | string | string[]; // 私有路由：启动验证程序 string：权限字符串（数组）
}

export type Landings = {
  [propName: string]: (args: { location: H.Location; payload: any }) => void;
};

export interface PrivateHandlerFunc {
  effect: (args: {
    location: H.Location;
    to: (key?: string, payload?: any) => void;
  }) => void;
  landings: Landings;
}

export interface RoutesProps {
  routes: RouteType[];
  privateHandler?: PrivateHandlerFunc;
}

function Routes(props: RoutesProps) {
  const { routes } = props;
  const element = useRoutes(routes);
  return element;
}

export default memo(Routes);
