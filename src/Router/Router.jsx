import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJobs from "../Pages/ApplyJobs";
import MyApplication from "../Pages/MyApplication";
import AddJobs from "../Pages/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications";
import { param } from "motion/react-client";

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
            },
            {
              path: '/jobs/:id',
              element: <PrivateRoute><JobDetails/></PrivateRoute>,
              loader : ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
              path: '/jobApply/:id',
              element: <PrivateRoute><ApplyJobs/></PrivateRoute>
            },
            {
              path: '/myApplication',
              element: <PrivateRoute><MyApplication/></PrivateRoute>
            },
            {
              path: '/addJobs',
              element: <PrivateRoute><AddJobs/></PrivateRoute>
            },
            {
              path:'/myPostedJobs',
              element: <PrivateRoute><MyPostedJobs/></PrivateRoute>
            },
            {
              path: '/viewApplications/:job_id',
              element: <PrivateRoute><ViewApplications/></PrivateRoute>,
              loader: ({params})=>fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
            }
          ]
        },
      ]);

export default router;