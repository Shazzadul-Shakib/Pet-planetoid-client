import Logo from "../logo/Logo";
import NavigationItems from "./NavigationItems";
import Searchbar from "./Searchbar";
import { ModeToggle } from "./ThemeToggler";

const BigScreenNavbar: React.FC = () => {
  return (
    <div className="px-10 shadow-md xl:px-[calc((100dvw-1200px)/2)]">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
          <Logo />
          <Searchbar />
        </div>
        <NavigationItems />
        <ModeToggle />
      </div>
    </div>
  );
};

export default BigScreenNavbar;
