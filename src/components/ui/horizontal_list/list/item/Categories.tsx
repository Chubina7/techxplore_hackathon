import label from "../../../../../../public/label.svg";
import Image from "next/image";

type Props = {
  list: Array<string>;
};

export default function Categories({ list }: Props) {
  return (
    <div className="w-full flex-grow flex justify-start items-end">
      <Image
        src={label}
        alt="label_icon"
        width={64}
        height={64}
        className="w-5 h-5"
      />
      <div className="text-xs opacity-70">
        {list.map((ctg, idx) => (
          <p key={idx} className="inline-block">
            {ctg}
          </p>
        ))}
      </div>
    </div>
  );
}
