import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "./Modules/Layout/MainLayOut";
import Home from "./Pages/Home";
import Paginationss from "./Pages/Paginationss";
import InfiteScrolles from "./Pages/InfiteScrolles";
import Details from "./Pages/Details";

const browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/paginationss",
        element: <Paginationss />,
      },
      {
        path: "/infiteScrolles",
        element: <InfiteScrolles />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={browerRouter} />
}

export default App;
