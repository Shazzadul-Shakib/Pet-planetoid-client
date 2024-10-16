import { Plus, SendHorizontal } from "lucide-react";
import { Input } from "../ui/input";
import Image from "next/image";
import { allIcons } from "@/icons/all-icons";

const ChatInput: React.FC = () => {
  const { cancel } = allIcons;
  return (
    <div className="ml-auto bg-background pt-2 md:grow-0">
      {/* Image preview section */}
      <div className="relative m-2 h-[150px] w-[150px] rounded-lg">
        <div className="absolute -right-2 -top-2 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-primary hover:bg-secondary">
          {cancel}
        </div>
        <Image
          src="/cat.jpg"
          alt="Avatar"
          className="rounded-lg object-cover"
          fill
          quality={100}
        />
      </div>
      {/* Input field section */}
      <div className="relative">
        <Plus className="absolute bottom-2.5 left-2.5 h-7 w-7 cursor-pointer text-muted-foreground" />
        <Input
          type="text"
          placeholder="@ Write your message..."
          className="w-full rounded-none px-12 py-6"
        />
        <SendHorizontal className="absolute bottom-2.5 right-2.5 h-7 w-7 cursor-pointer text-muted-foreground" />
      </div>
    </div>
  );
};

export default ChatInput;
