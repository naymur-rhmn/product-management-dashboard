import { createBrowserRouter } from "react-router-dom";
import Statistics from "../components/Statistics/Statistics";
import NotFound from "../components/NotFound/NotFound";
import DashboardLayout from "../layout/DashboardLayout";
import AllProduct from "../components/AllProduct/AllProduct";
import MyProduct from "../components/MyProduct/MyProduct";
import AddProduct from "../components/AddProduct/AddProduct";
import BuyProduct from "../components/BuyProduct/BuyProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "allProduct",
        element: <AllProduct />,
      },
      {
        path: "myProduct",
        element: <MyProduct />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "buyProduct",
        element: <BuyProduct />,
      },
    ],
  },
]);

export default router;
