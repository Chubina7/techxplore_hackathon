import Image from "next/image";
import React from "react";

type Props = {
  src: string;
};

export default function Icon({ src }: Props) {
  return (
    <Image
      src={src}
      alt="quizz_icon"
      width={144}
      height={144}
      className="h-14 w-14 | bg-customWhite rounded-2xl"
    />
  );
}
