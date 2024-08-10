import Listing from "../pages/Listing/Listing";
import FlipGame from "../pages/FlipGame/FlipGame";
import { tRoutesType } from "../types/routerTypes";

export const routes: tRoutesType = [
  { path: "/", element: Listing, index: true },
  { path: "/flip-game", element: FlipGame, index: false },
];
