import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import PostPage from "./pages/PostPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/posts/:id", element: <PostPage /> },
]);

export default router;