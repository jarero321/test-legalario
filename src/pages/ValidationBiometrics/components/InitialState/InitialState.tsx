import React from "react";
import { Button } from "@/components/Button";
import { DocumentRequired } from "../DocumentRequired";
import IcnCard from "@/assets/icn-card.svg";
import IcnSelfie from "@/assets/icn-selfie.svg";
import useValidationBiometrics from "@/pages/hooks/useValidationBiometrics";

const InitialState: React.FC = () => {
  const { handleSetStep } = useValidationBiometrics();

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
          <DocumentRequired img={IcnCard} title="INE/IFE o pasaporte" />
          <DocumentRequired
            img={IcnSelfie}
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
