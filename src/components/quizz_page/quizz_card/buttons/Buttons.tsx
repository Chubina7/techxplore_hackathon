import React from "react";
import NextBtn from "./NextBtn";
import Indicators from "./indicators/Indicators";

export default function Buttons() {
  return (
    <div className="w-full flex justify-between items-center">
      <Indicators />
      <NextBtn />
    </div>
  );
}
