import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import HomePage from "../pages/HomePage.jsx";
import PostPage from "../pages/PostPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "posts/:id", element: <PostPage /> },
    ],
  },
]);

export default router;