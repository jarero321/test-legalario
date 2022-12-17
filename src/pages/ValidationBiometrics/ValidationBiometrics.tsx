import React from "react";
import { CurrentRoute } from "@/components/CurrentRoute";
import SwitchedComponent from "@/components/SwitchedComponent";
import { DocumentCapture } from "@/pages/ValidationBiometrics/components/DocumentCapture";
import { InitialState } from "@/pages/ValidationBiometrics/components/InitialState";
import { SelfieCapture } from "@/pages/ValidationBiometrics/components/SelfieCapture";
import { Validating } from "@/pages/ValidationBiometrics/components/Validating";
import useValidationBiometrics from "../hooks/useValidationBiometrics";

const ValidationBiometrics: React.FC = () => {
  const { currentStep } = useValidationBiometrics();

  return (
    <div className="h-[73vh] md:h-[92vh] w-full lg:flex lg:items-center lg:justify-center">
      <div className="w-full xl:w-[780px] h-full lg:w-2/4 lg:h-fit lg:bg-white lg:shadow-2xl lg:px-[32px] lg:py-[32px] lg:rounded-[8px] ">
        <CurrentRoute />
        <SwitchedComponent active={currentStep} target="id">
          <div id="initialState" className="w-full h-full">
            <InitialState />
          </div>
          <div id="documentCapture" className="w-full h-full">
            <DocumentCapture />
          </div>
          <div id="selfieCapture" className="w-full h-full">
            <SelfieCapture />
          </div>
          <div id="validationBiometrics" className="w-full h-full">
            <Validating />
          </div>
        </SwitchedComponent>
      </div>
    </div>
  );
};

export default ValidationBiometrics;
