import Logo from "../logo/Logo";
import NavigationItems from "./NavigationItems";
import Searchbar from "./Searchbar";


const BigScreenNavbar: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center">
          <Logo />
          <Searchbar />
        </div>
        <NavigationItems />
      </div>
    </div>
  );
};

export default BigScreenNavbar;
