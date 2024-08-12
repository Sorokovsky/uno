import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import('../components/pages/Home/Home'));
const GamePage = lazy(() => import('../components/pages/Game/Game'));

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
    },
    {
        path: "/game",
        Component: GamePage,
    }
]);