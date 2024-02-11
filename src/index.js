import React from "react"
import {createRoot} from "react-dom/client"
import App from "./Home/App";
import Projects from "./Pages/Projects_Page/Projects";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";
import About from "./Pages/About/About";
const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
},
{
    path: "/about",
    element: <About />,
},
{
    path: "/projects",
    element: <Projects />,
},
{
    path: "/contact",
    element: <Contact />,
},
{
    path: "/skill",
    element: <Skills />,
},
]);
const domNode=document.getElementById('root');
const root=createRoot(domNode);
root.render(
    <RouterProvider router={router} />
)
