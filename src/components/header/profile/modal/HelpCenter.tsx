"use client";

import { useRouter } from "next/navigation";
import { IoHelpCircle } from "react-icons/io5";

type Props = {
  handleModal: () => void;
};

export default function HelpCenter({ handleModal }: Props) {
  const router = useRouter();

  const handleRouting = () => {
    router.push("/help");
    handleModal();
  };

  return (
    <div
      id="profile_modal"
      onClick={handleRouting}
      className="px-5 py-1 hover:bg-customPurpleDark hover:text-customBrightWhite transition-all duration-300 cursor-pointer flex justify-start items-center gap-2"
    >
      <IoHelpCircle id="profile_modal" size={20} />
      <h1 id="profile_modal">Help Center</h1>
    </div>
  );
}
