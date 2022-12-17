import React, { useContext } from "react";
import { Button } from "@/components/Button";
import { DragAndDrop } from "@/components/DragAndDrop";
import { ActionTypeValidationBiometrics } from "@/context/validationBiometrics/actions";
import { ValidationBiometricsContext } from "@/context/validationBiometrics/context";

interface UploadViewInterface {
  isSelfie?: boolean;
}
const UploadView: React.FC<UploadViewInterface> = ({ isSelfie = false }) => {
  const context = useContext(ValidationBiometricsContext);
  const { validationBiometricsDispatch, validationBiometricsState } = context;

  const validatePlace = (): string => {
    return isSelfie
      ? validationBiometricsState.photoFile
      : validationBiometricsState.docFile;
  };

  const handleSetDocFile = (file: File) => {
    validationBiometricsDispatch({
      type: isSelfie
        ? ActionTypeValidationBiometrics.SetPhotoFile
        : ActionTypeValidationBiometrics.SetDocFile,
      payload: URL.createObjectURL(file),
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
          <DragAndDrop handleChange={(file: File) => handleSetDocFile(file)} />
        ) : (
          <div className="w-full flex items-center justify-center" >
            <img className="max-h-[300px]" src={validatePlace()} />
          </div>
        )}
        <div className="w-full mt-[32px]">
          <p className="text-xl font-semibold text-center text-[#1B365D]">
            {isDocUploaded(validatePlace())
              ? "¡Genial!, se ha subido tu documento con éxito."
              : "Carga aquí tu documento."}
          </p>
          <p className="text-xs text-center text-[#BCBCBC] pt-[12px] ">
            Asegurate, que el documento se vea bien, buena iluminación y ninguna
            obstrucción
          </p>
        </div>
      </div>
      <div className="w-full flex lg:justify-between mt-[32px] py-[12px] gap-[12px] ">
        <div className="w-full lg:w-full ">
          <Button
            width="lg:w-full"
            disabled={!isDocUploaded(validatePlace())}
            height="lg:h-[60px]"
            handleClick={handleResetUpload}
            text="SUBIR DE NUEVO"
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
    </div>
  );
};

export default UploadView;
