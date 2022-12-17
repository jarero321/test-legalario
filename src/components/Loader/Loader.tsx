import React from "react";
import "./styles/Loader.css";
export interface LoaderInterface {}

const Loader: React.FC<LoaderInterface> = () => {
  return <div className="loader"></div>;
};

export default Loader;
