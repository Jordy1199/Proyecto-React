import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import GalleryPage from "../pages/GalleryPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ReservationsPage from "../pages/ReservationsPage";
import ServicesPage from "../pages/ServicesPage";
import StatusPage from "../pages/StatusPage";
import TypesPage from "../pages/TypesPage";
import "../pages/pages.css";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/tipos" element={<TypesPage />} />
        <Route path="/estado" element={<StatusPage />} />
        <Route
          path="/reservaciones"
          element={
            <ProtectedRoute>
              <ReservationsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
