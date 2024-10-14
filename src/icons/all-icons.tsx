import { TNavigation } from "@/types";
import { Bell, Ellipsis, House, MessageCircleMore, Store, X } from "lucide-react";

export const NavIcons:TNavigation[] = [
  { icon: <House size={22}/>, title: "Home", path:"/" },
  { icon: <Store size={22}/>, title: "Marketplace", path:"/marketplace" },
  { icon: <MessageCircleMore size={22}/>, title: "Messages", path:"/messages" },
  { icon: <Bell size={22}/>, title: "Notifications", path:"/notifications" },
];

export const allIcons={
  cancel:<X size={20}/>,
  hTDots:<Ellipsis size={20}/>
}