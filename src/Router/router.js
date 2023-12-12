import { createBrowserRouter } from "react-router-dom";
import Main from "../Page/Main";
import Home from "../Page/Home";
import Service from "../Page/Service";
import ExclusiveProducts from "../Page/ExclusiveProducts";
import QualityService from "../Page/QualityService";
import Experience from "../Page/Experience";
import Technology from "../Page/Technology";
import Trusted from "../Page/Trusted";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'',
            element:<Home></Home>
        },
        {
          path: 'service',
          element: <Service></Service>
        },
        {
          path: 'about',
          element: <Home></Home>
        },
        {
          path:'product',
          element:<ExclusiveProducts></ExclusiveProducts>
        },
         {
            path:'quality',
            element:<QualityService></QualityService>
        }, 
        {
          path:'experience',
          element:<Experience></Experience>
        },
         {
          path:'technology',
          element:<Technology></Technology>
        },
        {
          path:'partner',
          element:<Trusted></Trusted>
        }
      ]
    },
  ]);