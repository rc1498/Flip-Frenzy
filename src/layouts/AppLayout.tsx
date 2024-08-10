import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import useScrollToTop from "../hooks/useScrollToTop";

const AppLayout: FunctionComponent = () => {
  useScrollToTop();

  return (
    <>
      <Header />
      <main className="mt-14 h-[calc(100vh-56px)] overflow-y-auto">
        <div className="container mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AppLayout;
