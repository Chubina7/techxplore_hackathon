import { IoArrowForwardCircle } from "react-icons/io5";
import Link from "next/link";

type Props = {
  link: string;
};

export default function SeeAllBtn({ link }: Props) {
  return (
    <Link href={link} className="flex justify-between items-center">
      <IoArrowForwardCircle
        size={24}
        className="md:hidden opacity-60 hover:opacity-100 transition-all duration-300"
      />
      <button className="hidden md:block px-3 py-1 rounded-2xl bg-customBrightWhite opacity-60 hover:opacity-100 transition-all duration-300">
        ყველას ნახვა
      </button>
    </Link>
  );
}
