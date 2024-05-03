import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
export let globalContext = createContext();

export default function MyProvider(props) {
  const [dataUser, setDataUser] = useState({});
  const [dataAgancies, setDataAgancies] = useState([]);
  const [listFavorate, setListFavorate] = useState([]);
  const [Areas, setAreas] = useState([]);
  const [OurCapabilities, setOurCapabilities] = useState([]);
  const [ourAddress, setOurAddress] = useState([]);
  const [whyUs, setWhyUs] = useState([]);

  // footer link & contents state
  const [fastLinks, setFastLinks] = useState([]);

  // useCalback | when change is list , list is save to localstorage
  const updateLocalStorage = useCallback(() => {
    localStorage.setItem("listFav", JSON.stringify(listFavorate));
  }, [listFavorate]);

  // function add to list favoraie
  const AddPr = (newItem) => {
    if (!listFavorate.some((i) => i.id === newItem.id)) {
      setListFavorate((prevItem) => [...prevItem, newItem]);
      // axios.patch(`http://localhost:5000/users/${dataUser.id}`)
    } else {
      return;
    }
  };
  // function remove to list favorate
  const removePr = (id) => {
    setListFavorate((items) => {
      return items.filter((i) => i.id !== id);
    });
  };
  // function is Save
  const isSavePr = (idProject) => {
    if (!listFavorate.some((i) => i.id === idProject)) {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    // get list favorate from localstorage and again save to localstorage
    setListFavorate((setListFavorate, listFavorate) => {
      return JSON.parse(localStorage.getItem("listFav"));
    });

    // get All API

    // get data all agancies from api
    axios.get("http://localhost:5000/agancies").then((res) => {
      setDataAgancies(res.data);
    });
    // get data our capability for page about
    axios.get("http://localhost:5000/OurCapabilities").then((res) => {
      setOurCapabilities(res.data);
    });
    // get data why us for apage about
    axios.get("http://localhost:5000/whyUs").then((res) => {
      setWhyUs(res.data);
    });
    // get data our address
    axios.get("http://localhost:5000/AddressUs&infoUs").then((res) => {
      setOurAddress(res.data);
    });
    // get data top areas
    axios.get("http://localhost:5000/TopAreas").then((res) => {
      setAreas(res.data);
    });

    // get all fast links
    axios.get("http://localhost:5000/fastLinks").then((res) => {
      setFastLinks(res.data);
    });
  }, []);

  // useEfect | when change is list , list is save to localstorage
  useEffect(() => {
    updateLocalStorage();
  }, [listFavorate, updateLocalStorage]);

  return (
    <globalContext.Provider
      value={{
        dataAgancies,
        setDataAgancies,
        whyUs,
        OurCapabilities,
        ourAddress,
        addressFooter: ourAddress[0],
        // state and functions list favorate
        listFavorate,
        removePr,
        AddPr,
        isSavePr,
        lengthOfList: listFavorate.length,
        // state data user
        setDataUser,
        dataUser,
        // state all data Areas
        Areas,
        setAreas,

        // fast links
        fastLinks,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
}
