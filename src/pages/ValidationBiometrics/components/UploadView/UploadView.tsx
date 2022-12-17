import React from "react";
import { Button } from "@/components/Button";
import { DragAndDrop } from "@/components/DragAndDrop";
import useValidationBiometrics from "@/pages/hooks/useValidationBiometrics";

interface UploadViewInterface {
  isSelfie?: boolean;
}
const UploadView: React.FC<UploadViewInterface> = ({ isSelfie = false }) => {
  const {
    validatePlace,
    isDocUploaded,
    handleSetDocFile,
    handleResetUpload,
    handlevalidateBiometrics,
  } = useValidationBiometrics();
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col justify-center">
        {!isDocUploaded(validatePlace(isSelfie)) ? (
          <DragAndDrop
            handleChange={(file: File) => handleSetDocFile(file, isSelfie)}
          />
        ) : (
          <div className="w-full flex items-center justify-center">
            <img className="max-h-[300px]" src={validatePlace(isSelfie)} />
          </div>
        )}
        <div className="w-full mt-[32px]">
          <p className="text-xl font-semibold text-center text-[#1B365D]">
            {isDocUploaded(validatePlace(isSelfie))
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
            disabled={!isDocUploaded(validatePlace(isSelfie))}
            height="lg:h-[60px]"
            handleClick={() => handleResetUpload(isSelfie)}
            text="SUBIR DE NUEVO"
          />
        </div>
        <div className="w-full lg:w-full">
          <Button
            disabled={!isDocUploaded(validatePlace(isSelfie))}
            width="lg:w-full"
            height="lg:h-[60px]"
            handleClick={() => handlevalidateBiometrics(isSelfie)}
            text="CONTINUAR"
          />
        </div>
      </div>
    </div>
  );
};

export default UploadView;
