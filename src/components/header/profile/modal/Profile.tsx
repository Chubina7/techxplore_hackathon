"use client";

import { useRouter } from "next/navigation";
import { IoPerson } from "react-icons/io5";

type Props = {
  handleModal: () => void;
};

export default function Profile({ handleModal }: Props) {
  const router = useRouter();

  const handleRouting = () => {
    router.push("/player?query=param");
    handleModal();
  };

  return (
    <div
      onClick={handleRouting}
      className="px-5 py-1 hover:bg-customPurpleDark hover:text-customBrightWhite transition-all duration-300 cursor-pointer flex justify-start items-center gap-2"
    >
      <IoPerson size={20} />
      <h1>Player Profile</h1>
    </div>
  );
}
