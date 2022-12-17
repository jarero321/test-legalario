import React from "react";
import { Loader } from "@/components/Loader";
import IcnBiometrics from "@/assets/icn-biometrics.svg";

const Validating: React.FC = () => {
  const [validating, setValidating] = React.useState(false);

  const fakeApi = async () => {
    setValidating(true);
    setTimeout(() => {
      setValidating(false);
    }, 2000);
  };

  React.useEffect(() => {
    fakeApi();
  }, []);

  return (
    <div className="w-full h-full pt-[32px] flex flex-col items-center justify-center gap-[24px] ">
      <img width={50} src={IcnBiometrics} />
      <p className="text-xl font-semibold text-center text-[#1B365D]">
        {!validating
          ? "Reconocimiento facial biométrico exitoso"
          : "Reconocimiento facial biométrico en proceso"}
      </p>
      <p className="text-xs text-center text-[#BCBCBC] ">
        {!validating
          ? "Se ha realizado con éxito el proceso de validación"
          : "Estamos realizando la validación de la fotografia de tu documento contra la foto de tu rostro para verificar tu identidad."}
      </p>
      {validating && (
        <>
          <p className="text-xl font-semibold text-center text-[#1B365D]">
            Procesando
          </p>
          <Loader />
        </>
      )}
    </div>
  );
};

export default Validating;
