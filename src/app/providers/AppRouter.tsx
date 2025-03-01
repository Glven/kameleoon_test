import {FC} from "react";
import {RouterProvider} from "react-router-dom";
import {routerConfig} from './routerConfig.tsx'
export const AppRouter:FC = () => {
    return <RouterProvider router={routerConfig()}/>
}
