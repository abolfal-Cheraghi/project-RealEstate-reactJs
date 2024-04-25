import React, { createContext, useState } from "react";
export let globalContext = createContext(null);

export default function MyProvider(props) {
  const [dataArray, setDataArray] = useState({});

  const all = { dataArray, setDataArray };
  return (
    <globalContext.Provider value={all}>
      {props.children}
    </globalContext.Provider>
  );
}
