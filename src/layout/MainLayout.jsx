import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";

const Footer = lazy(() => import("../components/footer/Footer"));

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
};

export default MainLayout;
