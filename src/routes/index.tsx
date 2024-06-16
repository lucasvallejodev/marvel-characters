import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, HeroPage, HeroListPage, NotFoundPage, RootLayout, heroLoader } from "../pages";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HeroListPage />,
        loader: heroLoader,
      },
      {
        path: "/heroes",
        element: <HeroListPage />,
        loader: heroLoader,
      },
      {
        path: "/heroes/:heroId",
        element: <HeroPage />,
        loader: heroLoader,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      }
    ]
  },
]);