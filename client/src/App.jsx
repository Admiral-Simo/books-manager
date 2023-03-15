import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Books />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/update",
    element: <Update />,
  },
]);

function App() {
  return (
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
