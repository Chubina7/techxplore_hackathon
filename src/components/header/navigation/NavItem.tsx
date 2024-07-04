"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  item: {
    link: string;
    title: string;
  };
};

export default function NavItem({ item }: Props) {
  const path = usePathname();

  return (
    <li
      className={`${
        path === item.link ? "font-semibold" : "font-normal"
      } transition-all duration-300`}
    >
      <Link href={item.link}>{item.title}</Link>
    </li>
  );
}
