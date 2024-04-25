import { useContext } from "react";
import { globalContext } from "../context/MyProvider";

export const useDglobal = () => {
  const context = useContext(globalContext);

  if (context === undefined) {
    throw new Error("useDglobal() must be used inside a themeProvider");
  }
  return context;
};
