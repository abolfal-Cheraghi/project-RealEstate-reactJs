import { useContext } from "react";
import { globalContext } from "../context/MyProvider";

export const useAddPr = () => {
  const { listFavorate, dispatch } = useContext(globalContext);

  const AddPr = (item) => {
    dispatch({ type: "ADD_TO_FAVORATE", payload: item });
  };

  return {
    items : listFavorate.items ,
    AddPr,
  };
};
