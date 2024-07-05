"use client";

import { useRouter } from "next/navigation";
import { IoHomeOutline } from "react-icons/io5";

export default function ReturnButton() {
  const router = useRouter();

  const handleReturn = () => {
    // show dialog before route change
    router.push("/");
  };

  return (
    <button
      className="px-5 py-2 bg-customPurpleDark text-customBrightWhite rounded-2xl flex gap-3 justify-center items-center opacity-60 hover:opacity-100 transition-all duration-300"
      onClick={handleReturn}
    >
      <IoHomeOutline size={20} />
      <p className="text-sm font-semibold hidden sm:inline-block">მთავარი</p>
    </button>
  );
}
