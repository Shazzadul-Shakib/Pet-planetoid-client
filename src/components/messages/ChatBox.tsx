import Image from "next/image";
import ChatInput from "./ChatInput";
import MessageCard from "./MessageCard";
import Avatar from "../shared/Avatar";
import { allIcons } from "@/icons/all-icons";

const ChatBox: React.FC<{ visible: boolean; close: () => void }> = ({
  visible,
  close,
}) => {
  const { back } = allIcons;
  return (
    <div
      className={`relative mt-0.5 ${visible ? "block" : "hidden"} h-[calc(100dvh-130px)] w-full md:block md:h-[calc(100dvh-70px)]`}
    >
      {/* User Info section - chat with whom */}
      <div className="flex items-center justify-between bg-secondary px-4 py-2">
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/124599?v=4"
              width={40}
              height={40}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </div>
          <div>
            <h1 className="text-md font-semibold">User Name</h1>
          </div>
        </div>
        <div className="cursor-pointer md:hidden" onClick={close}>
          {back}
        </div>
      </div>

      {/* Messages secion */}
      <div className="relative h-[calc(100dvh-200px)] overflow-y-auto border-secondary md:h-[calc(100dvh-140px)]">
        {/* Message section */}
        <div className="absolute bottom-0 w-full pb-10">
          {/* Receiver's message */}
          <div className="flex justify-start gap-3 p-3">
            <Avatar />
            <MessageCard />
          </div>
          {/* Owners's message */}
          <div className="flex justify-end p-3">
            <MessageCard />
          </div>
        </div>
        {/* Input section */}
      </div>

      {/* Write message section */}
      <div className="absolute bottom-0 left-0 w-full">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatBox;
