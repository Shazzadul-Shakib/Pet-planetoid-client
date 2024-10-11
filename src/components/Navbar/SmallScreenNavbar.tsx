import { NavIcons } from "@/icons/all-icons";
import Link from "next/link";

const SmallScreenNavbar: React.FC = () => {
  return (
    <div className="border-t border-gray-700">
      <div className="mx-2 flex items-center justify-around gap-8 pb-2 pt-3 text-xs">
        {NavIcons.map((item) => (
          <Link
            href={item.path}
            key={item.title}
            className="flex flex-col items-center gap-1"
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
