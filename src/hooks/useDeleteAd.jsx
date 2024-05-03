import { useContext } from "react";
import { globalContext } from "../context/MyProvider";
import { useDglobal } from "./useDglobal";

export const useDeletePr = () => {
  const { listFavorate, dispatch } = useDglobal();

  const deletePr = (addId) => {
    dispatch({ type: "DELETE_TO_FAVORATE", payload: addId });
  };

  return {
    deletePr,
  };
};
