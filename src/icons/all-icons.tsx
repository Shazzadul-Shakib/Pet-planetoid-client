import { TNavigation } from "@/types";
import { Bell, Ellipsis, House, MessageCircleMore, Store, X } from "lucide-react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { GoFileMedia } from "react-icons/go";

export const NavIcons:TNavigation[] = [
  { icon: <House size={22}/>, title: "Home", path:"/" },
  { icon: <Store size={22}/>, title: "Marketplace", path:"/marketplace" },
  { icon: <MessageCircleMore size={22}/>, title: "Messages", path:"/messages" },
  { icon: <Bell size={22}/>, title: "Notifications", path:"/notifications" },
];

export const allIcons = {
  cancel: <X size={20} />,
  hTDots: <Ellipsis size={20} />,
  filledHeart: <FaHeart size={20} />,
  outlinedHeart: <FaRegHeart size={20} />,
  comment: <BiCommentDetail size={20} />,
  media: <GoFileMedia size={24} />,
};