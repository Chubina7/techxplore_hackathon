import { IoPricetagOutline } from "react-icons/io5";

type Props = {
  data: string;
};

export default function Categories({ data }: Props) {
  return (
    <div className="w-full flex-grow flex justify-start items-end gap-2 opacity-70">
      <IoPricetagOutline size={18} />
      <p className="text-xs">{data}</p>
    </div>
  );
}
