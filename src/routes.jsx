import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/HomePage";
import Blog from "./pages/blog/Blog";
import Account from "./pages/account/Account";
import Favorate from "./pages/account/favorate/Favorate.jsx";
import Properties from "./pages/properties/Properties";
import Agencies from "./pages/agencies/Agencies";
import Login from "./pages/auth/login/Login";
import Regester from "./pages/auth/regester/Regester";
import ForgetPassword from "./pages/auth/forget-password/ForgetPassword";
import PrivateRoute from "./components/PrivateRoute";
import Property from "./pages/property/Property.jsx";
import Agancy from "./pages/agencies/agancy/Agancy.jsx";
import { Children } from "react";
import AddProperty from "./pages/account/add-Property/AddProperty.jsx";
import EditProperty from "./pages/account/edit-property/EditProperty.jsx";
import UpgradeToAgent from "./pages/account/upgrade-to-agent/UpgradeToAgent.jsx";
import ListSubmitedPr from "./pages/account/list-of-submited-pr/ListSubmitedPr.jsx";

export let routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <About /> },
  { path: "/contact-us", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  {
    path: "/account",
    element: (
      <PrivateRoute>
        <Account />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-property",
        element: <AddProperty />,
      },
      {
        path: "edit-property",
        element: <EditProperty />,
      },
      {
        path: "list-of-submited-properties",
        element: <ListSubmitedPr />,
      },
      {
        path: "favorates",
        element: <Favorate />,
      },
      {
        path: "upgrade-to-agent",
        element: <UpgradeToAgent />,
      },
      {
        path: "edit-account-info",
        element: <UpgradeToAgent />,
      },
    ],
  },
  { path: "/agencies", element: <Agencies /> },
  { path: "/agency-profile/:idAgency", element: <Agancy /> },
  { path: "/properties/*", element: <Properties /> },
  { path: "/property/:propetyId", element: <Property /> },
  { path: "/regester", element: <Regester /> },
  { path: "/login", element: <Login /> },
  { path: "/forget-password", element: <ForgetPassword /> },
];
