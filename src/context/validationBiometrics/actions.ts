export enum ActionTypeValidationBiometrics {
  SetDocFile,
  SetPhotoFile,
  SetCurrentStep,
  SetCurrentSubStep,
}

export interface SetDocFile {
  type: ActionTypeValidationBiometrics.SetDocFile;
  payload: string;
}

export interface SetPhotoFile {
  type: ActionTypeValidationBiometrics.SetPhotoFile;
  payload: string;
}

export interface SetCurrentStep {
  type: ActionTypeValidationBiometrics.SetCurrentStep;
  payload: string;
}

export interface SetCurrentSubStep {
  type: ActionTypeValidationBiometrics.SetCurrentSubStep;
  payload: string;
}

export type ValidationBiometricsActions =
  | SetDocFile
  | SetPhotoFile
  | SetCurrentStep
  | SetCurrentSubStep;
