import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createHashRouter} from "react-router-dom/dist";
import Home from "./pages/home";
import Folder1 from "./pages/folders/Folder1";

const router = createHashRouter([
    {
        path: "/folder-1",
        element: <Folder1 />
    },
    {
        path: "*",
        element: <Home/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>

);
