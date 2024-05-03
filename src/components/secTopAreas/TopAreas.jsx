import axios from "axios";
import React, { memo } from "react";
import CartAreas from "../cartAreas/CartAreas";
import { useDglobal } from "../../hooks/useDglobal";

export default function TopAreas() {
  const { Areas, setAreas } = useDglobal();
  return (
    <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-14">
      {Areas.map((area) => (
        <CartAreas key={area.id} {...area} />
      ))}
    </div>
  );
}
