import React, { useContext } from "react";
import { Button } from "@/components/Button";
import { TakeAPhoto } from "@/components/TakeAPhoto";
import { ActionTypeValidationBiometrics } from "@/context/validationBiometrics/actions";
import { ValidationBiometricsContext } from "@/context/validationBiometrics/context";
import { CameraNotFound } from "@/pages/ValidationBiometrics/components/CameraNotFound";

interface PhotographyViewInterface {
  isSelfie?: boolean;
}

const PhotographyView: React.FC<PhotographyViewInterface> = ({
  isSelfie = false,
}) => {
  const context = useContext(ValidationBiometricsContext);
  const { validationBiometricsDispatch, validationBiometricsState } = context;
  const [cameraNotFound, setCameraNotFound] = React.useState(false);

  const validatePlace = (): string => {
    return isSelfie
      ? validationBiometricsState.photoFile
      : validationBiometricsState.docFile;
  };

  const handleSetPhotoFile = (dataUri: string) => {
    validationBiometricsDispatch({
      type: isSelfie
        ? ActionTypeValidationBiometrics.SetPhotoFile
        : ActionTypeValidationBiometrics.SetDocFile,
      payload: dataUri,
    });
  };

  const handleSetStep = (value: string) => {
    validationBiometricsDispatch({
      type: ActionTypeValidationBiometrics.SetCurrentStep,
      payload: value,
    });
    validationBiometricsDispatch({
      type: ActionTypeValidationBiometrics.SetCurrentSubStep,
      payload: "instructions",
    });
  };

  const isDocUploaded = (value: string): boolean => {
    return Boolean(value.length !== 0);
  };

  const handleResetUpload = () => {
    validationBiometricsDispatch({
      type: isSelfie
        ? ActionTypeValidationBiometrics.SetPhotoFile
        : ActionTypeValidationBiometrics.SetDocFile,
      payload: "",
    });
  };

  const handleCameraNotFound = (data: string) => {
    if (data) {
      setCameraNotFound(true);
    } else {
      setCameraNotFound(false);
    }
  };

  const handlevalidateBiometrics = () => {
    if (isSelfie) {
      handleSetStep("validationBiometrics");
    } else {
      handleSetStep("selfieCapture");
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col justify-center">
        {!isDocUploaded(validatePlace()) ? (
          <>
            {!cameraNotFound ? (
              <TakeAPhoto
                isSelfie={isSelfie}
                handleCameraError={(data) => handleCameraNotFound(data)}
                handleSetData={(data: string) => handleSetPhotoFile(data)}
              />
            ) : (
              <CameraNotFound />
            )}
          </>
        ) : (
          <img src={validatePlace()} />
        )}
        {!cameraNotFound && (
          <div className="w-full mt-[32px]">
            <p className="text-xl font-semibold text-center text-[#1B365D]">
              {isDocUploaded(validatePlace())
                ? "¡Genial!, has tomado exitosamente la fotografia."
                : "Coloca dentro del margen tu identificación."}
            </p>
            <p className="text-xs text-center text-[#BCBCBC] pt-[12px]">
              Asegurate, que el documento se vea bien, buena iluminación y
              ninguna obstrucción
            </p>
          </div>
        )}
      </div>
      {!cameraNotFound && (
        <div className="w-full flex lg:justify-between mt-[32px] py-[12px] gap-[12px] ">
          <div className="w-full lg:w-full ">
            <Button
              width="lg:w-full"
              disabled={!isDocUploaded(validatePlace())}
              height="lg:h-[60px]"
              handleClick={handleResetUpload}
              text="TOMAR DE NUEVO"
            />
          </div>
          <div className="w-full lg:w-full">
            <Button
              disabled={!isDocUploaded(validatePlace())}
              width="lg:w-full"
              height="lg:h-[60px]"
              handleClick={handlevalidateBiometrics}
              text="CONTINUAR"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyView;
