import React from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";

import "react-html5-camera-photo/build/css/index.css";
export interface TakeAPhotoInterface {
  handleSetData(data: string): void;
  handleCameraError(error: any): void;
  isSelfie?: boolean;
}

const TakeAPhoto: React.FC<TakeAPhotoInterface> = ({
  handleSetData,
  handleCameraError,
  isSelfie = false,
}) => {
  return (
    <div>
      <Camera
        idealResolution={{ width: 1080, height: 1080 }}
        isSilentMode
        isDisplayStartCameraError={false}
        idealFacingMode={
          isSelfie ? FACING_MODES.USER : FACING_MODES.ENVIRONMENT
        }
        onCameraError={(error) => {
          handleCameraError(error);
        }}
        onTakePhoto={(dataUri) => {
          handleSetData(dataUri);
        }}
      />
    </div>
  );
};

export default TakeAPhoto;
