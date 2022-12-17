import React, { useContext } from "react";
import { Button } from "@/components/Button";
import IcnError from "@/assets/icn-error.svg";
import { ActionTypeValidationBiometrics } from "@/context/validationBiometrics/actions";
import { ValidationBiometricsContext } from "@/context/validationBiometrics/context";

const CameraNotFound: React.FC = () => {
  const context = useContext(ValidationBiometricsContext);
  const { validationBiometricsDispatch } = context;

  const handleSetSubStep = (value: string) => {
    validationBiometricsDispatch({
      type: ActionTypeValidationBiometrics.SetCurrentSubStep,
      payload: value,
    });
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col items-center justify-center gap-[12px] ">
        <img width={30} src={IcnError} />
        <p className="text-xl font-semibold text-center text-[#1B365D]">
          Camara no encontrada
        </p>
        <p className="text-xs text-center text-[#BCBCBC] pt-[12px]">
          Tuvimos problemas al usar el accesorio de tu camara
        </p>
      </div>
      <div className="w-full flex lg:justify-end mt-[32px] py-[12px] ">
        <Button
          width="lg:w-[250px]"
          height="lg:h-[60px]"
          handleClick={() => handleSetSubStep("uploadDoc")}
          text="SUBIR IMAGEN MANUAL"
        />
      </div>
    </div>
  );
};

export default CameraNotFound;
