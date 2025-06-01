import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./styles.css";
import { RouterProvider, createBrowserRouter, defer, redirect } from "react-router-dom";
import { Home } from "./pages/home";
import { UserForm } from "./pages/user-form";
import { addUser, loadUsers } from "./utils/api";

const domNode = document.getElementById("root") as HTMLDivElement;
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
    loader: async () => defer({ data: loadUsers() })
  },
  {
    path: "/user/add",
    element: <UserForm />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);