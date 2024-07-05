import Image from "next/image";
import React from "react";
import { dummydata } from "../../../../../lib/DummyData";

type Props = {
  src: string;
};

export default function Icon({ src }: Props) {
  return (
    <Image
      src={src !== "" ? src : dummydata[0].icon}
      alt="quizz_icon"
      width={144}
      height={144}
      className="h-14 w-14 | bg-customBrightWhite rounded-2xl"
    />
  );
}
