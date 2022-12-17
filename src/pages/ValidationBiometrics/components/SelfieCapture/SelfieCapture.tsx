import React from "react";
import SwitchedComponent from "../../../../components/SwitchedComponent";
import { ValidationBiometricsContext } from "../../../../context/validationBiometrics/context";
import { Instructions } from "../Instructions";
import { PhotographyView } from "../PhotographyView";
import { UploadView } from "../UploadView";

const SelfieCapture: React.FC = () => {
  const context = React.useContext(ValidationBiometricsContext);
  const { validationBiometricsState } = context;
  return (
    <div className="w-full h-full flex lg:block items-center justify-center pt-[32px]">
      <SwitchedComponent
        target="id"
        active={validationBiometricsState.currentSubStep}
      >
        <div id="instructions" className="w-full h-full">
          <Instructions
            title="¡Pon tu mejor rostro!, que tomaras una selfie"
            subtitle="Asegurate de estar en un ambiente iluminado y con el rostro sin accesorios."
          />
        </div>
        <div className="w-full h-full" id="uploadDoc">
          <UploadView isSelfie />
        </div>
        <div className="w-full h-full" id="takeADoc">
          <PhotographyView isSelfie />
        </div>
      </SwitchedComponent>
    </div>
  );
};

export default SelfieCapture;
