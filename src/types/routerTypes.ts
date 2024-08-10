import { ComponentType } from "react";

export interface iRouterItem {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: ComponentType<any>; // Accepts components with any props
  index: boolean;
}

export type tRoutesType = iRouterItem[];
