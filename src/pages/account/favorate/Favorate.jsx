import React, { useEffect } from "react";
import { useDglobal } from "../../../hooks/useDglobal";

export default function Favorate() {
  const { listFavorate } = useDglobal();
  useEffect(() => {
    console.log(listFavorate);
  }, []);
  return <div>Favorate</div>;
}
