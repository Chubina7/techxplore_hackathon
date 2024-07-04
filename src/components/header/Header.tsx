import Logo from "../Logo";
import ProfilePic from "../user/ProfilePic";
import BurgerMenu from "./burger_menu/BurgerMenu";
import Navigation from "./navigation/Navigation";

export default function Header() {
  return (
    <header className="bg-customWhite fixed top-0 left-0 | w-full h-14 px-4 | flex justify-between items-center">
      <Logo className="h-full py-2" />
      <div className="hidden md:flex h-full items-center gap-4">
        <Navigation />
        <ProfilePic className="h-full py-2" />
      </div>
      <div className="block md:hidden h-full">
        <BurgerMenu />
      </div>
    </header>
  );
}
