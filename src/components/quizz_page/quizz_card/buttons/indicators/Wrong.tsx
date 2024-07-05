import { IoCloseCircle } from "react-icons/io5";

type Props = {
  num: number;
};

export default function Wrong({ num }: Props) {
  return (
    <div className="flex justify-center items-center text-sm">
      <IoCloseCircle size={18} color="red" /> <p className="w-2">{num}</p>
    </div>
  );
}
