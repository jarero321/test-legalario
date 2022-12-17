import { ActionTypeValidationBiometrics } from "@/context/validationBiometrics/actions";
import { ValidationBiometricsContext } from "@/context/validationBiometrics/context";
import React from "react";
const useValidationBiometrics = () => {
  const context = React.useContext(ValidationBiometricsContext);
  const { validationBiometricsState, validationBiometricsDispatch } = context;
  const { currentStep, docFile, photoFile, currentSubStep } =
    validationBiometricsState;

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

  const handleSetSubStep = (value: string) => {
    validationBiometricsDispatch({
      type: ActionTypeValidationBiometrics.SetCurrentSubStep,
      payload: value,
    });
  };

  const validatePlace = (isSelfie: boolean): string => {
    return isSelfie
      ? validationBiometricsState.photoFile
      : validationBiometricsState.docFile;
  };

  const handleSetDocFile = (file: File, isSelfie: boolean) => {
    validationBiometricsDispatch({
      type: isSelfie
        ? ActionTypeValidationBiometrics.SetPhotoFile
        : ActionTypeValidationBiometrics.SetDocFile,
      payload: URL.createObjectURL(file),
    });
  };

  const handleSetPhotoFile = (file: string, isSelfie: boolean) => {
    validationBiometricsDispatch({
      type: isSelfie
        ? ActionTypeValidationBiometrics.SetPhotoFile
        : ActionTypeValidationBiometrics.SetDocFile,
      payload: file,
    });
  };

  const isDocUploaded = (value: string): boolean => {
    return Boolean(value.length !== 0);
  };

  const handleResetUpload = (isSelfie: boolean) => {
    validationBiometricsDispatch({
      type: isSelfie
        ? ActionTypeValidationBiometrics.SetPhotoFile
        : ActionTypeValidationBiometrics.SetDocFile,
      payload: "",
    });
  };

  const handlevalidateBiometrics = (isSelfie: boolean) => {
    if (isSelfie) {
      handleSetStep("validationBiometrics");
    } else {
      handleSetStep("selfieCapture");
    }
  };

  return {
    currentStep,
    docFile,
    photoFile,
    currentSubStep,
    handleSetStep,
    handleSetSubStep,
    validatePlace,
    handleSetDocFile,
    isDocUploaded,
    handleResetUpload,
    handlevalidateBiometrics,
    handleSetPhotoFile,
  };
};

export default useValidationBiometrics;
