import { memo, ReactChildren } from "react";

export interface PrivateRouteType {
  children: ReactChildren;
}

function PrivateRoute(props: PrivateRouteType) {
  return (
    <div>2</div>
  );
}

export default memo(PrivateRoute);
