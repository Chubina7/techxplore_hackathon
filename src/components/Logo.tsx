import Image from "next/image";
import src from "../../public/logo.png";

type Props = {
  className: string;
};

export default function Logo({ className }: Props) {
  return (
    <div className={className}>
      <Image
        src={src}
        alt="_logo"
        width={144}
        height={144}
        className="w-full h-full"
      />
    </div>
  );
}
