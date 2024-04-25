import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import CartAreas from "../cartAreas/CartAreas";
import { refresh } from "aos";

function TopAreas() {
  const [Areas, setAreas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/TopAreas").then((res) => {
      setAreas(res.data);
    });
    console.log("refresh");
  }, []);
  return (
    <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-14">
      {Areas.map((area) => (
        <CartAreas {...area} />
      ))}
    </div>
  );
}
export default memo(TopAreas);
