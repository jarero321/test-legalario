import React from "react";
import { CurrentRoute } from "../../components/CurrentRoute";
import SwitchedComponent from "../../components/SwitchedComponent";
import { ValidationBiometricsContext } from "../../context/validationBiometrics/context";
import { DocumentCapture } from "./components/DocumentCapture";
import { InitialState } from "./components/InitialState";
import { SelfieCapture } from "./components/SelfieCapture";
import { Validating } from "./components/Validating";

const ValidationBiometrics: React.FC = () => {
  const context = React.useContext(ValidationBiometricsContext);
  const { validationBiometricsState } = context;

  return (
    <div className="h-[73vh] md:h-[92vh] w-full lg:flex lg:items-center lg:justify-center">
      <div className="w-full xl:w-[780px] h-full lg:w-2/4 lg:h-fit lg:bg-white lg:shadow-2xl lg:px-[32px] lg:py-[32px] lg:rounded-[8px] ">
        <CurrentRoute />
        <SwitchedComponent
          active={validationBiometricsState.currentStep}
          target="id"
        >
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
