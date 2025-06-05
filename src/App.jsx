// import react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

// import pages
import Loading from "./pages/loading/Loading";
const Login = lazy(() => import("./pages/login/Login"));
const Error = lazy(() => import("./pages/error/Error"));
const PageNotFound = lazy(() => import("./pages/pageNotFound/PageNotFound"));
const Home = lazy(() => import("./pages/admin/home/Home"));
const Groups = lazy(() => import("./pages/admin/groups/Groups"));
const Teachers = lazy(() => import("./pages/admin/teachers/Teachers"));
const Specialities = lazy(() =>
  import("./pages/admin/specialities/Specialities")
);
const SpecialityDetails = lazy(() =>
  import("./pages/admin/specialities/specialityDetails/SpecialityDetails")
);

// import layouts
import RoutesLayout from "./layouts/RoutesLayout";
import AdminLayout from "./layouts/adminLayout/AdminLayout";
import SpecialitiesLayout from "./layouts/specialitiesLayout/SpecialitiesLayout";
import ThemesLayout from "./layouts/themesLayout/ThemesLayout";

// import styles
import "./App.css";
import ThemesSection from "./pages/admin/themes/ThemesSection";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <RoutesLayout />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "admin",
          element: <AdminLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "groups",
              element: <Groups />,
            },
            {
              path: "teachers",
              element: <Teachers />,
            },
            {
              path: "specialities",
              element: <SpecialitiesLayout />,
              children: [
                {
                  index: true,
                  element: <Specialities />,
                },
                {
                  path: ":name",
                  element: <ThemesLayout />,
                  children: [
                    {
                      index: true,
                      element: <SpecialityDetails />,
                    },
                    {
                      path: ":id",
                      element: <ThemesSection />,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default App;
