import React from "react";
export interface ContainerInterface {
  children?: JSX.Element;
}

const Container: React.FC<ContainerInterface> = ({ children }) => {
  return <div className="w-full h-full px-[24px] py-[24px]"> {children} </div>;
};

export default Container;
