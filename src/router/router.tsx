import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import AppLayout from "../layouts/AppLayout";

const routingCallback = routes.map((item) => {
  const { path, element: Element, index } = item;
  return {
    path: path,
    element: <Element />,
    index,
  };
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: routingCallback,
  },
]);

export default router;
