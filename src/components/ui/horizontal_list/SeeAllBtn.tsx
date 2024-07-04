import Link from "next/link";

type Props = {
  link: string;
};

export default function SeeAllBtn({ link }: Props) {
  return (
    <Link href={link}>
      <button className="px-3 py-1 rounded-2xl bg-customBrightWhite opacity-60 hover:opacity-100 transition-all duration-300">
        ყველას ნახვა
      </button>
    </Link>
  );
}
