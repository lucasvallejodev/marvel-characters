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
        element: <HeroListPage />
      },
      {
        path: "/favorites",
        element: <HeroListPage isFavoritePage />
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