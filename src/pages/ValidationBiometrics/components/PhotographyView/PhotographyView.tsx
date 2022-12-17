import React from "react";
import { Button } from "@/components/Button";
import { TakeAPhoto } from "@/components/TakeAPhoto";
import { CameraNotFound } from "@/pages/ValidationBiometrics/components/CameraNotFound";
import useValidationBiometrics from "@/pages/hooks/useValidationBiometrics";

interface PhotographyViewInterface {
  isSelfie?: boolean;
}

const PhotographyView: React.FC<PhotographyViewInterface> = ({
  isSelfie = false,
}) => {
  const {
    isDocUploaded,
    validatePlace,
    handleResetUpload,
    handleSetPhotoFile,
    handlevalidateBiometrics,
  } = useValidationBiometrics();

  const [cameraNotFound, setCameraNotFound] = React.useState(false);

  const handleCameraNotFound = (data: string) => {
    if (data) {
      setCameraNotFound(true);
    } else {
      setCameraNotFound(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col justify-center">
        {!isDocUploaded(validatePlace(isSelfie)) ? (
          <>
            {!cameraNotFound ? (
              <TakeAPhoto
                isSelfie={isSelfie}
                handleCameraError={(data) => handleCameraNotFound(data)}
                handleSetData={(data: string) =>
                  handleSetPhotoFile(data, isSelfie)
                }
              />
            ) : (
              <CameraNotFound />
            )}
          </>
        ) : (
          <img src={validatePlace(isSelfie)} />
        )}
        {!cameraNotFound && (
          <div className="w-full mt-[32px]">
            <p className="text-xl font-semibold text-center text-[#1B365D]">
              {isDocUploaded(validatePlace(isSelfie))
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
              disabled={!isDocUploaded(validatePlace(isSelfie))}
              height="lg:h-[60px]"
              handleClick={() => handleResetUpload(isSelfie)}
              text="TOMAR DE NUEVO"
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
      )}
    </div>
  );
};

export default PhotographyView;
