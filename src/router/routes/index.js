import MainLayout from "../../layouts/MainLayout";
import { privateRoutes } from "./privateroutes";

export const getRoutes = () => {
  return {
    // it will go to Home component by default
    path: "/",
    element: <MainLayout />,
    children: privateRoutes, //adminRoutes [AdminDashboard> and sellerRoutes  <Home>
  };
};
