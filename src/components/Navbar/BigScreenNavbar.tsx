import Logo from "../logo/Logo";
import Avatar from "./Avatar";
import NavigationItems from "./NavigationItems";
import Searchbar from "./Searchbar";
import { ModeToggle } from "./ThemeToggler";

const BigScreenNavbar: React.FC = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-background px-10 shadow-md xl:px-[calc((100dvw-1200px)/2)]">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
          <Logo />
          <Searchbar />
        </div>
        <NavigationItems />
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default BigScreenNavbar;
