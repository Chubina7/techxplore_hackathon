import Image from "next/image";
import src from "../../../public/anonym.webp";

type Props = {
  className: string;
  path?: string;
};

export default function ProfilePic({ className, path }: Props) {
  return (
    <div className={className} id="profile_modal">
      <Image
        src={src}
        alt="user_pic"
        width={144}
        height={144}
        className={`w-full h-full rounded-full transition-all duration-300 ${
          path === "/player"
            ? "border-2 border-customPurpleDark p-[2px]"
            : "border-0"
        }`}
        id="profile_modal"
      />
    </div>
  );
}
