import { Header } from "@/layout/Header";
import React from "react";

interface LayoutProps {
  children?: JSX.Element;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-screen max-h-screen lg:bg-[#FCFCFC]">
      <Header />
      {children}
    </div>
  );
};
export default Layout;
