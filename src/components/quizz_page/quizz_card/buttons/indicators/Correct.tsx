import { IoCheckmarkCircle } from "react-icons/io5";

type Props = {
  num: number;
};

export default function Correct({ num }: Props) {
  return (
    <div className="flex justify-center items-center text-sm">
      <IoCheckmarkCircle size={18} color="green" /> <p className="w-2">{num}</p>
    </div>
  );
}
