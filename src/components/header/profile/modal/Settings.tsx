"use client";

import { useRouter } from "next/navigation";
import { IoSettings } from "react-icons/io5";

type Props = {
  handleModal: () => void;
};

export default function Settings({ handleModal }: Props) {
  const router = useRouter();

  const handleRouting = () => {
    router.push("/settings");
    handleModal();
  };

  return (
    <div
      id="profile_modal"
      onClick={handleRouting}
      className="px-5 py-1 hover:bg-customPurpleDark hover:text-customBrightWhite transition-all duration-300 cursor-pointer flex justify-start items-center gap-2"
    >
      <IoSettings id="profile_modal" size={20} />
      <h1 id="profile_modal">Settings</h1>
    </div>
  );
}
