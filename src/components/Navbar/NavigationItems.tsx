import { NavIcons } from "@/icons/all-icons";
import Link from "next/link";

const NavigationItems: React.FC = () => {
  return (
    <div className="flex  items-center justify-end gap-14 text-xs">
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
  );
};

export default NavigationItems;
