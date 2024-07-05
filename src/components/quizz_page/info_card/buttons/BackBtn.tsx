"use client";

import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();
  
  const handleBack = () => router.back();

  return (
    <button
      className="font-semibold px-5 py-2 border-2 border-customPurpleDark rounded-2xl flex justify-center items-center gap-2"
      onClick={handleBack}
    >
      უკან დაბრუნება
    </button>
  );
}
