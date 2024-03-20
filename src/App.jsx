import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import MyProvider from "./context/MyProvider";
import { useLayoutEffect } from "react";

function App() {
  const router = useRoutes(routes);
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);

  return <MyProvider>{router}</MyProvider>;
}

export default App;
