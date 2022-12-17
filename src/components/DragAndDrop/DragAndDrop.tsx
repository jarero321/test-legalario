import React from "react";
import { FileUploader } from "react-drag-drop-files";
import IcnUpload from "@/assets/icn-upload.svg";
export interface DragAndDropInterface {
  handleChange(file: File): void;
}

const DragAndDrop: React.FC<DragAndDropInterface> = ({ handleChange }) => {
  return (
    <FileUploader
      types={["png", "jpeg"]}
      maxSize={1}
      handleChange={(file: File) => handleChange(file)}
    >
      <div className="w-full h-[130px] bg-white cursor-pointer ">
        <div className="w-full h-full px-[6px] py-[6px] lg:px-[24px]  border border-dashed flex flex-col items-center justify-center gap-[12px] border-[#096299] rounded-[6px]">
          <img src={IcnUpload} />
          <p className="text-[#096299] text-xs font-semibold text-center">
            Carga tu imagen o archivo
          </p>
        </div>
      </div>
    </FileUploader>
  );
};

export default DragAndDrop;
