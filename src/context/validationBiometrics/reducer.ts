import { IValidationBiometrics } from "@/context/validationBiometrics/state";
import {
  ActionTypeValidationBiometrics,
  ValidationBiometricsActions,
} from "@/context/validationBiometrics/actions";

export function validationBiometricsReducer(
  state: IValidationBiometrics,
  action: ValidationBiometricsActions
): IValidationBiometrics {
  if (action.type === ActionTypeValidationBiometrics.SetCurrentStep) {
    return { ...state, currentStep: action.payload };
  }
  if (action.type === ActionTypeValidationBiometrics.SetCurrentSubStep) {
    return { ...state, currentSubStep: action.payload };
  }
  if (action.type === ActionTypeValidationBiometrics.SetDocFile) {
    return { ...state, docFile: action.payload };
  }
  if (action.type === ActionTypeValidationBiometrics.SetPhotoFile) {
    return { ...state, photoFile: action.payload };
  }
  return state;
}
