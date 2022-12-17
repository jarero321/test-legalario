import React from "react";
import { Button } from "../../../../components/Button";
import { ActionTypeValidationBiometrics } from "../../../../context/validationBiometrics/actions";
import { ValidationBiometricsContext } from "../../../../context/validationBiometrics/context";
import { DocumentRequired } from "../DocumentRequired";

const InitialState: React.FC = () => {
  const context = React.useContext(ValidationBiometricsContext);
  const { validationBiometricsDispatch } = context;

  const handleSetStep = (value: string) => {
    validationBiometricsDispatch({
      type: ActionTypeValidationBiometrics.SetCurrentStep,
      payload: value,
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <div className="mt-[32px]">
          <p className="text-xl font-semibold text-[#1B365D]">
            Verifiquemos tu identidad
          </p>
          <p className="text-sm text-[#BCBCBC] mt-[6px]">
            Para ser verificado es necesario:
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row mt-[24px] gap-[24px]">
          <DocumentRequired img="/icn-card.svg" title="INE/IFE o pasaporte" />
          <DocumentRequired
            img="/icn-selfie.svg"
            title="Selfie o fotografia del rostro"
          />
        </div>
        <div>
          <p className="text-xs text-[#BCBCBC] text-center mt-[24px]">
            Nota: Puedes subir los archivos o tomarle foto desde tu dispositivo.
          </p>
        </div>
      </div>
      <div className="flex lg:justify-end mt-[32px] py-[12px] ">
        <Button
          width="lg:w-[250px]"
          height="lg:h-[60px]"
          handleClick={() => handleSetStep("documentCapture")}
          text="EMPEZAR"
        />
      </div>
    </div>
  );
};

export default InitialState;
