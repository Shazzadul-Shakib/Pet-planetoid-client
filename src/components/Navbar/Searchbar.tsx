import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Searchbar: React.FC = () => {
  return (
    <div className="relative ml-auto md:grow-0">
      <Search className="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
      />
    </div>
  );
};

export default Searchbar;
