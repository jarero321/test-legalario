import React from "react";
export interface ButtonInterface {
  handleClick(): void;
  text: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonInterface> = ({
  text,
  handleClick,
  width,
  height,
  disabled,
  className,
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-full py-[10px] px-[8px] rounded-[8px] flex items-center justify-center 
      ${width ?? ""} ${height ?? ""} 
      ${disabled ? "bg-[#BCBCBC]" : "bg-[#2196F3]"} ${className ?? ""}
      `}
    >
      <p className="text-white">{text}</p>
    </button>
  );
};

export default Button;
