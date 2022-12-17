import { createContext, Dispatch, useReducer } from "react";
import { ValidationBiometricsActions } from "./actions";
import { validationBiometricsReducer } from "./reducer";
import { IValidationBiometrics, initalState } from "./state";

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
