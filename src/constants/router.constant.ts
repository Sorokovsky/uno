import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import('../components/pages/Home/Home'));
export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    }
]);