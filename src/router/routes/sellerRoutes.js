import Category from "../../views/admin/Category";
import Home from "../../views/Home";

const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];

export default sellerRoutes;
