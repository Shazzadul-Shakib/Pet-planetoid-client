import Logo from "../logo/Logo";
import NavigationItems from "./NavigationItems";
import Searchbar from "./Searchbar";


const BigScreenNavbar: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <Logo />
        <NavigationItems />
        <Searchbar />
      </div>
    </div>
  );
};

export default BigScreenNavbar;
