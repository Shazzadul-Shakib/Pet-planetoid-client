import Logo from "../Logo";
import Searchbar from "./Searchbar";

const BigScreenNavbar: React.FC = () => {
  return (
    <div>
      <div className="flex ">
        <Logo />
        <Searchbar />
      </div>
      
      <div>

      </div>
    </div>
  );
};

export default BigScreenNavbar;