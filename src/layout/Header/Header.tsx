import React from "react";
import LegalarioImg from "@/assets/icn-legaSign.svg";

const Header: React.FC = () => {
  return (
    <header className="w-full px-[18px] py-[12px] lg:h-[75px] bg-[#1B365D] flex">
      <img width={79} height={26} src={LegalarioImg} />
    </header>
  );
};

export default Header;
