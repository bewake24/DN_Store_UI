import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/Layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <>Error Element</>,
    children: [
      {
        path: "",
        element: (
          <h1 className="mx-4 my-2 text-3xl font-semibold text-black transition-colors duration-300 ease-in hover:text-blue-700">
            Hello World
          </h1>
        ),
      },
    ],
  },
]);

export default router;
