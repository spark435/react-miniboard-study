import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// add router
import { RouterProvider } from "react-router/dom";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { index: true, element: <PostPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
