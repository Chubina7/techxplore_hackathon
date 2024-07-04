import { IoCaretDown } from "react-icons/io5";

type Props = {
  handleOpen: () => void;
  id: string;
  title: string;
};

export default function SelectBtn({ handleOpen, id, title }: Props) {
  return (
    <div
      className="w-fit px-5 py-2 bg-customBrightWhite rounded-2xl flex gap-2 justify-center items-center select-none cursor-pointer"
      onClick={handleOpen}
      id={id}
    >
      <h1 className="font-semibold" id={id}>
        {title}
      </h1>
      <IoCaretDown size={18} opacity={70} id={id} />
    </div>
  );
}
