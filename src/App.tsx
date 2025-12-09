import { createBrowserRouter, RouterProvider, Navigate } from "react-router";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Snippets from "./pages/Snippets";
import User from "./pages/User";
import ProtectedRoute from "./pages/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/snippets",
    element: (
      <ProtectedRoute>
        <Snippets />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
