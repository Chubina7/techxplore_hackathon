import Logo from "../Logo";
import BurgerMenu from "./burger_menu/BurgerMenu";
import Navigation from "./navigation/Navigation";
import Profile from "./profile/Profile";

export default function Header() {
  return (
    <header className="bg-white fixed top-0 left-0 | w-full h-14 px-4 | flex justify-between items-center">
      <Logo className="h-full py-2" />
      <div className="relative hidden md:flex h-full items-center gap-4">
        <Navigation />
        <Profile />
      </div>
      <div className="block md:hidden h-full">
        <BurgerMenu />
      </div>
    </header>
  );
}
