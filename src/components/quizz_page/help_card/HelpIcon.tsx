"use client";

import { useState } from "react";
import { IoHelpCircleOutline } from "react-icons/io5";
import HelpCard from "./HelpCard";

export default function HelpIcon() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="relative z-50"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <IoHelpCircleOutline
        size={32}
        className={`cursor-pointer hover:scale-105 ${
          isShown ? "scale-105" : "scale-100"
        } transition-all duration-300`}
      />
      {isShown && <HelpCard />}
    </div>
  );
}
