import React from "react";
import IcnReturn from "@/assets/icn-return.png";
export interface CurrentRouteInterface {
  name?: string;
}

const CurrentRoute: React.FC<CurrentRouteInterface> = ({
  name = "Carlos Jarero",
}) => {
  return (
    <div className="flex gap-[10px] items-center">
      <img src={IcnReturn} width={15} height={15} />
      <div className="flex gap-[3px]">
        <p className="text-xs"> {name} /</p>
        <p className="text-xs font-bold">Validación biometrica</p>
      </div>
    </div>
  );
};

export default CurrentRoute;
