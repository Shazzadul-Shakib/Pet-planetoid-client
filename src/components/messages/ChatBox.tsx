import Image from "next/image";
import ChatInput from "./ChatInput";
import MessageCard from "./MessageCard";
import Avatar from "../shared/Avatar";

const ChatBox: React.FC = () => {
  return (
    <div className="relative h-[calc(100dvh-130px)] w-full md:h-[calc(100dvh-70px)]">
      {/* User Info section - chat with whom */}
      <div className="flex items-center gap-4 bg-secondary p-3 pb-0">
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

      {/* Messages secion */}
      <div className="relative h-[calc(100dvh-195px)] overflow-y-auto border-l border-r border-secondary md:h-[calc(100dvh-130px)]">
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
