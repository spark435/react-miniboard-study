import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage.jsx";
import PostPage from "../pages/PostPage.jsx";
import App from "../App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "posts/:id", element: <PostDetailPage /> },
    ],
  },
]);
export default router;