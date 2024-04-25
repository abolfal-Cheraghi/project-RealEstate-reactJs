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

export let routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <About /> },
  { path: "/contact-us", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  {
    path: "/account-panel",
    element: (
      <PrivateRoute>
        <Account />
      </PrivateRoute>
    ),
  },
  {
    path: "/favorates",
    element: (
      <PrivateRoute>
        <Favorate />
      </PrivateRoute>
    ),
  },
  { path: "/agencies", element: <Agencies /> },
  { path: "/properties/*", element: <Properties /> },
  { path: "/regester", element: <Regester /> },
  { path: "/login", element: <Login /> },
  { path: "/forget-password", element: <ForgetPassword /> },
];
