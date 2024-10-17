import { allIcons } from "@/icons/all-icons";
import Searchbar from "../Navbar/Searchbar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ListFilter } from "lucide-react";

const HeaderCard: React.FC = () => {
  const { sell } = allIcons;
  return (
    <div className="flex items-center gap-6 py-3">
      <h1 className="text-xl font-semibold">MarketPlace</h1>
      <Searchbar />
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-9 gap-1 text-sm">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only">Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Pets</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Pet food</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>pet essentials</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button variant="outline" className="gap-2 font-semibold">
        <span>{sell}</span>
        <span className="hidden sm:block"> Sell</span>
      </Button>
    </div>
  );
};

export default HeaderCard;
