import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
export let globalContext = createContext(null);

// favorate Properties
const favorateReducer = (listFavorate, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORATE":
      return {
        items: [...listFavorate.item, action.payload],
      };
    case "DELETE_TO_FAVORATE":
      return {
        items: listFavorate.items.forEach((item) => item.id !== action.payload),
      };
    default: {
      return listFavorate;
    }
  }
};
export default function MyProvider(props) {
  const [dataAgancies, setDataAgancies] = useState([]);
  const [listFavorate, dispatch] = useReducer(favorateReducer, []);
  const [OurCapabilities, setOurCapabilities] = useState([]);
  const [ourAddress, setOurAddress] = useState([]);
  const [whyUs, setWhyUs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/agancies").then((res) => {
      setDataAgancies(res.data);
    });

    axios.get("http://localhost:5000/OurCapabilities").then((res) => {
      setOurCapabilities(res.data);
    });
    axios.get("http://localhost:5000/whyUs").then((res) => {
      setWhyUs(res.data);
    });
    axios.get("http://localhost:5000/AddressUs&infoUs").then((res) => {
      setOurAddress(res.data);
    });
  }, []);
  return (
    <globalContext.Provider
      value={{
        dataAgancies,
        setDataAgancies,
        whyUs,
        OurCapabilities,
        ourAddress,
        listFavorate,
        dispatch,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
}
