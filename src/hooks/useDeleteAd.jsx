import { useContext } from "react";
import { globalContext } from "../context/MyProvider";

export const useDeletePr = () => {
  const { listFavorate, dispatch } = useContext(globalContext);

  const deletePr = (addId) => {
    dispatch({ type: "DELETE_TO_FAVORATE", payload: addId });
  };

  return {
    deletePr,
  };
};
