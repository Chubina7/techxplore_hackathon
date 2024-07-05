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
      onClick={handleRouting}
      className="px-5 py-1 hover:bg-customPurpleDark hover:text-customBrightWhite transition-all duration-300 cursor-pointer flex justify-start items-center gap-2"
    >
      <IoSettings size={20} />
      <h1 className="">Settings</h1>
    </div>
  );
}
