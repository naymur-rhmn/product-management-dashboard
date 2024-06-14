import { RouterProvider } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import router from "./routes/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
