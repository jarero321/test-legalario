import React from "react";
import { Button } from "../../../../components/Button";
import { ActionTypeValidationBiometrics } from "../../../../context/validationBiometrics/actions";
import { ValidationBiometricsContext } from "../../../../context/validationBiometrics/context";
export interface InstructionsInterface {
  title?: string;
  subtitle?: string;
}

const Instructions: React.FC<InstructionsInterface> = ({
  title = "Busca tu documento fisico para sacarle unas fotos.",
  subtitle = "Asegurate, que el documento se vea bien, buena iluminación y ninguna obstrucción",
}) => {
  const context = React.useContext(ValidationBiometricsContext);
  const { validationBiometricsDispatch } = context;

  const handleSetSubStep = (value: string) => {
    validationBiometricsDispatch({
      type: ActionTypeValidationBiometrics.SetCurrentSubStep,
      payload: value,
    });
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col justify-center gap-[12px] ">
        <div className="w-full flex items-center justify-center">
          <img width={50} height={50} src="/icn-selfie.svg" />
        </div>
        <p className="text-xl font-semibold text-center text-[#1B365D]">
          {title}
        </p>
        <p className="text-xs text-center text-[#BCBCBC] ">{subtitle}</p>
        <p
          onClick={() => handleSetSubStep("uploadDoc")}
          className="text-center text-xs text-[#2196F3] cursor-pointer"
        >
          Si prefieres puedes subir el archivo dando click aqui.
        </p>
      </div>
      <div className="flex lg:justify-end mt-[32px] py-[12px] ">
        <Button
          width="lg:w-[250px]"
          height="lg:h-[60px]"
          handleClick={() => handleSetSubStep("takeADoc")}
          text="COMENCEMOS"
        />
      </div>
    </div>
  );
};

export default Instructions;
