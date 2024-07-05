"use client";

import { useRouter } from "next/navigation";
import { IoArrowForwardCircle } from "react-icons/io5";

type Props = {
  handleModal: () => void;
};

export default function SignOut({ handleModal }: Props) {
  const router = useRouter();

  const handleRouting = () => {
    router.push("/signout");
    handleModal();
  };

  return (
    <div
      onClick={handleRouting}
      className="px-5 py-1 hover:bg-customPurpleDark hover:text-customBrightWhite transition-all duration-300 cursor-pointer flex justify-start items-center gap-2"
    >
      <IoArrowForwardCircle size={20} />
      <h1>Sign out</h1>
    </div>
  );
}
