import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

      const router = createBrowserRouter([
        {
          path: "/",
          element: <Root/>,
          errorElement: <h3 className="text-red-500 text-4xl">404 not found</h3>,
          children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path : '/register',
                element: <Register/>
            },
            {
              path: '/login',
              element : <Login/>
            }
          ]
        },
      ]);

export default router;