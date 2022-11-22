import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

      children: [
        {
          index: true,
          element: <Videos />,
        },
        {
          path: "/videos",
          element: <Videos />,
        },
        {
          path: "/videos/:keyword",
          element: <Videos />,
        },
        {
          path: "/videos/watch/:id",
          element: <VideoDetail />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
