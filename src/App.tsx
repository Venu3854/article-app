import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowAllArticles from "./pages/ShowAllArticles";
import DetailedArticle from "./pages/DetailedArticle";
import Body from "./components/Body";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <ShowAllArticles />,
        },
        {
          path: "/:id",
          element: <DetailedArticle />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
