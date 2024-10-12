"use client";
import { NavIcons } from "@/icons/all-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationItems: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="mx-2 hidden items-center justify-end gap-8 text-xs md:flex lg:gap-14">
      {NavIcons.map((item) => (
        <Link
          href={item.path}
          key={item.title}
          className={`${pathname === item.path ? "active" : ""} nav relative flex flex-col items-center gap-1`}
        >
          {item.icon}
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavigationItems;
