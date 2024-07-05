import { IoArrowForwardOutline } from "react-icons/io5";

export default function NextBtn() {
  return (
    <button className="px-5 py-2 bg-customPurpleDark text-customBrightWhite rounded-2xl flex justify-center items-center gap-2">
      <p className="text-sm font-semibold">შემდეგი</p>{" "}
      <IoArrowForwardOutline size={20} />
    </button>
  );
}
