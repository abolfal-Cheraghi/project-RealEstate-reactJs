import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/HomePage";
import Blog from "./pages/blog/Blog";
import Account from "./pages/account/Account";
import Favorate from "./pages/favorate/Favorate";
import Properties from "./pages/properties/Properties";
import Agencies from "./pages/agencies/Agencies";
import AddProperty from "./pages/addProperty/AddProperty";
export let routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <About /> },
  { path: "/contact-us", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/account-panel", element: <Account /> },
  { path: "/favorates", element: <Favorate /> },
  { path: "/agencies", element: <Agencies /> },
  { path: "/properties", element: <Properties /> },
  { path: "/add-property", element: <AddProperty /> },
];
