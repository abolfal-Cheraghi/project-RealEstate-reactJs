import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import CartPropertiy3 from "../cartProperty3/CartPropertiy3";

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
    <div className="box-news-properties bg-white rounded-lg py-3 px-4 mt-5">
      <h4 className=" text-black text-lg s-medium">آخرین ملک ها</h4>
      <div className="wrapper grid grid-cols-1 gap-3 mt-4">
        {dataNewProperties.map((property, index) => (
          <>
            <CartPropertiy3
              key={property.id}
              {...property}
              cover={property.images[0]}
              price={
                property.for == "برای فروش"
                  ? property.price.Buy
                  : property.price.monthlyRent
              }
            />
            {index < dataNewProperties.length - 1 && (
              <hr className="hr-carts" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default memo(BoxNewProperties);
