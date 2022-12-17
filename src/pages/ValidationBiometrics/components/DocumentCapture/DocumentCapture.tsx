import React from "react";
import SwitchedComponent from "@/components/SwitchedComponent";
import { ValidationBiometricsContext } from "@/context/validationBiometrics/context";
import { Instructions } from "@/pages/ValidationBiometrics/components/Instructions";
import { PhotographyView } from "@/pages/ValidationBiometrics/components/PhotographyView";
import { UploadView } from "@/pages/ValidationBiometrics/components/UploadView";

const DocumentCapture: React.FC = () => {
  const context = React.useContext(ValidationBiometricsContext);
  const { validationBiometricsState } = context;

  return (
    <div className="w-full h-full flex lg:block items-center justify-center pt-[32px]">
      <SwitchedComponent
        target="id"
        active={validationBiometricsState.currentSubStep}
      >
        <div id="instructions" className="w-full h-full">
          <Instructions />
        </div>
        <div className="w-full h-full" id="uploadDoc">
          <UploadView />
        </div>
        <div className="w-full h-full" id="takeADoc">
          <PhotographyView />
        </div>
      </SwitchedComponent>
    </div>
  );
};

export default DocumentCapture;
