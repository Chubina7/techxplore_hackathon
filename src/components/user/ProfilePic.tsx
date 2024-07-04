import Image from "next/image";
import src from "../../../public/anonym.webp";

type Props = {
  className: string;
};

export default function ProfilePic({ className }: Props) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt="user_pic"
        width={144}
        height={144}
        className="w-full h-full rounded-full"
      />
    </div>
  );
}
