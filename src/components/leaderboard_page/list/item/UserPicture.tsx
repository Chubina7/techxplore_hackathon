import anonym from "../../../../../public/anonym.webp";
import Image from "next/image";

type Props = {
  src: string | undefined;
};

export default function UserPicture({ src }: Props) {
  return (
    <Image
      src={src || anonym}
      alt=""
      width={144}
      height={144}
      className="w-14 h-14 rounded-full"
    />
  );
}
