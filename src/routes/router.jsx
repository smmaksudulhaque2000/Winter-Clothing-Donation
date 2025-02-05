import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../layouts/Home";
import DonationCampaigns from "../components/NavItems/DonationCampaigns";
import HowToHelp from "../components/NavItems/HowToHelp";
import Dashboard from "../components/NavItems/Dashboard";
import Banner from "../components/Banner";
import Auth from "../components/Auth";
import Login from "../components/User/Login";
import Register from "../components/User/Register";
import DonateDetails from "../components/DonateDetails";
import Rahim from "../components/story/Rahim";
import Amina from "../components/story/Amina";
import Children from "../components/story/Children";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Banner />,
        loader: () => fetch('/fakeData.json'),
      },
    ],
  },
  {
    path: "/donationcampaigns",
    element: <DonationCampaigns />,
    loader: () => fetch('/fakeData.json'),
  },
  {
    path: "/howtohelp",
    element: <HowToHelp />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/donatedetails/:methodid",
    element: (
      <PrivateRoute>
        <DonateDetails />
      </PrivateRoute>
    ),
    loader: () => fetch('/fakeData.json'),
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/rahim",
    element: <Rahim />,
  },
  {
    path: "/amina",
    element: <Amina />,
  },
  {
    path: "/children",
    element: <Children />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
