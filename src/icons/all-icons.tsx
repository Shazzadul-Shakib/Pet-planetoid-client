import { TNavigation } from "@/types";
import {
  Bell,
  Ellipsis,
  House,
  MessageCircleMore,
  MoveLeft,
  Store,
  Tag,
  X,
} from "lucide-react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { GoFileMedia } from "react-icons/go";
import { TbCurrencyTaka } from "react-icons/tb";

export const NavIcons: TNavigation[] = [
  { icon: <House size={22} />, title: "Home", path: "/" },
  { icon: <Store size={22} />, title: "Marketplace", path: "/marketplace" },
  {
    icon: <MessageCircleMore size={22} />,
    title: "Messages",
    path: "/messages",
  },
  { icon: <Bell size={22} />, title: "Notifications", path: "/notifications" },
];

export const allIcons = {
  cancel: <X size={20} />,
  hTDots: <Ellipsis size={20} />,
  filledHeart: <FaHeart size={20} />,
  outlinedHeart: <FaRegHeart size={20} />,
  comment: <BiCommentDetail size={20} />,
  media: <GoFileMedia size={24} />,
  sell: <Tag size={14} />,
  taka: <TbCurrencyTaka size={20} />,
  back:<MoveLeft size={20}/>
};
