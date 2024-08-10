import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const AppLayout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="mt-14 h-[calc(100vh-56px)] overflow-y-auto">
        <div className="container mx-auto max-w-7xl px-4">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AppLayout;
