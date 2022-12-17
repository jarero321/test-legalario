import { createContext, Dispatch, useReducer } from "react";
import { ValidationBiometricsActions } from "@/context/validationBiometrics/actions";
import { validationBiometricsReducer } from "@/context/validationBiometrics/reducer";
import { IValidationBiometrics, initalState } from "@/context/validationBiometrics/state";

const ValidationBiometricsContext = createContext<{
  validationBiometricsState: IValidationBiometrics;
  validationBiometricsDispatch: Dispatch<ValidationBiometricsActions>;
}>({
  validationBiometricsState: initalState,
  validationBiometricsDispatch: () => undefined,
});

interface IValidationBiometricsProvider {
  children?: React.ReactNode;
}

const ValidationBiometricsProvider: React.FC<IValidationBiometricsProvider> = ({
  children,
}) => {
  const [validationBiometricsState, validationBiometricsDispatch] = useReducer(
    validationBiometricsReducer,
    initalState
  );

  return (
    <ValidationBiometricsContext.Provider
      value={{ validationBiometricsDispatch, validationBiometricsState }}
    >
      {children}
    </ValidationBiometricsContext.Provider>
  );
};

export { ValidationBiometricsProvider, ValidationBiometricsContext };
