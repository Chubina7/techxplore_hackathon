import Image from "next/image";
import src from "../../../../public/brgr_logo.svg";

export default function BurgerMenu() {
  return (
    <div className="h-full flex justify-center items-center py-3">
      <Image
        src={src}
        alt="burger_menu_logo"
        width={144}
        height={144}
        className="w-full h-full cursor-pointer"
      />
    </div>
  );
}
