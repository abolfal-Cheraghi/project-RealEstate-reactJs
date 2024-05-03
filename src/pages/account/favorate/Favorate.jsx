import React, { useEffect } from "react";
import { useDglobal } from "../../../hooks/useDglobal";
import CartProperty2 from "../../../components/cartProperty2/CartProperty2";
import { IoTrashBin } from "react-icons/io5";
import Aos from "aos";
import NotFound from "../../../components/not-found/NotFound";
export default function Favorate() {
  const { removePr, listFavorate, lengthOfList } = useDglobal();
  useEffect(() => {
    Aos.init();
  }, [listFavorate]);
  return (
    <>
      {lengthOfList !== 0 && (
        <h4 className="mb-6 text-lg text-black s-medium">
          شما {lengthOfList} آگهی را به علاقه مندی ها اضافه کردید .
        </h4>
      )}
      <div className="grid grid-cols-1 gap-8">
        {lengthOfList === 0 ? (
          <NotFound notfound="شما هیچ ملکی را در علاقه مندی ذخیره نکردین 🫡" />
        ) : (
          listFavorate.map((property) => (
            <>
              <div className="relative">
                <div
                  className="box-remove bg-[#e63131] hover:bg-[#C10000] duration-300 p-1 rounded-lg w-fit absolute z-10 bottom-5 left-5"
                  id={property.id}
                  onClick={() => {
                    removePr(property.id);
                  }}
                >
                  <IoTrashBin size="18px" className="fill-white" />
                </div>
                <CartProperty2
                  key={property.id}
                  aos="fade-up"
                  {...property}
                  all={property}
                  img={property.images}
                  type={property.overview.type}
                  rooms={property.overview.numberOFrooms}
                  bathrooms={property.overview.numberOFbathrooms}
                  landArea={property.overview.landArea}
                  price={
                    property.for == "برای فروش"
                      ? property.price.Buy
                      : property.price.monthlyRent
                  }
                />
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
}
