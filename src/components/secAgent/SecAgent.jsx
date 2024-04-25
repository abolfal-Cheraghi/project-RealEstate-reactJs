import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import CartAganc from "../cartAganc/CartAganc";

function SecAgent() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/agancies/").then((res) => {
      setAgents(res.data);
    });
  }, []);

  return (
    <div className="pt-14 grid grid-cols-1 gap-6 md:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      {agents.map((agent) => (
        <CartAganc {...agent} />
      ))}
    </div>
  );
}

export default memo(SecAgent);
