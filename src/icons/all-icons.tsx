import { TNavigation } from "@/types";
import { Bell, House, MessageCircleMore, Store } from "lucide-react";

export const NavIcons:TNavigation[] = [
  { icon: <House />, title: "Home", path:"/" },
  { icon: <Store />, title: "Marketplace", path:"/" },
  { icon: <MessageCircleMore />, title: "Messages", path:"/" },
  { icon: <Bell />, title: "Notifications", path:"/" },
];
