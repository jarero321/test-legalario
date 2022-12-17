export interface IValidationBiometrics {
  docFile: string;
  photoFile: string;
  currentStep: string;
  currentSubStep: string;
}

export const initalState: IValidationBiometrics = {
  docFile: "",
  photoFile: "",
  currentStep: "initialState",
  currentSubStep: "instructions",
};
