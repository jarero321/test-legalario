import React from "react";
export interface DocumentRequiredInterface {
  img: string;
  title: string;
}

const DocumentRequired: React.FC<DocumentRequiredInterface> = ({
  img,
  title,
}) => {
  return (
    <div className="w-full flex px-[32px] items-center h-[80px] border border-[#E9EEF4] rounded-[8px] gap-[12px] ">
      <img src={img ?? ""} />
      <p className="text-xs text-[#2D2C3A]">{title ?? ""}</p>
    </div>
  );
};

export default DocumentRequired;
