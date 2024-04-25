import axios from "axios";
import React, { memo, useEffect, useState } from "react";

function BoxNewProperties() {
  const [dataNewProperties, setDataNewProperties] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/properties/?_limit=6").then((res) => {
      setDataNewProperties(res.data);
      setIsPending(true);
    });
  }, []);
  return (
    <div className="box-news-properties bg-white rounded-lg p-3">
      <h4 className="text-lg">آخرین ملک ها</h4>

      <div className="wrapper flex flex-wrap">
        
      </div>
    </div>
  );
}

export default memo(BoxNewProperties);
