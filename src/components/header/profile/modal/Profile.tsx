"use client";

import { usePathname, useRouter } from "next/navigation";
import { IoPerson } from "react-icons/io5";

type Props = {
  handleModal: () => void;
};

export default function Profile({ handleModal }: Props) {
  const router = useRouter();
  const path = usePathname();

  const handleRouting = () => {
    if (path === "/player") return;
    router.push("/player?query=param");
    handleModal();
  };

  return (
    <div
      id="profile_modal"
      onClick={handleRouting}
      className={`px-5 py-1 ${
        path === "/player"
          ? "bg-customPurpleDark text-customBrightWhite cursor-default"
          : "hover:bg-customPurpleDark hover:text-customBrightWhite"
      } transition-all duration-300 cursor-pointer flex justify-start items-center gap-2`}
    >
      <IoPerson size={20} id="profile_modal" />
      <h1 id="profile_modal">Player Profile</h1>
    </div>
  );
}
