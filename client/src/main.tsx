import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound.tsx";
import { LandingPage } from "./pages/Landingpage.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";
import { Signup } from "./pages/Signup.tsx";
import { Signin } from "./pages/Signin.tsx";
import { Blog } from "./pages/Blog.tsx";
import { Blogs } from "./pages/Blogs.tsx";
import { NewBlog } from "./pages/NewBlog.tsx";
import { BlogSkeleton } from "./pages/BlogSkeleton.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/blog/:blogId",
    element: <Blog />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/write-in-verse",
    element: <NewBlog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
