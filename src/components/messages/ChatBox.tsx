import Image from "next/image";
import ChatInput from "./ChatInput";

const ChatBox: React.FC = () => {
  return (
    <div className="h-full w-full">
      <div className="flex items-center gap-4 bg-secondary p-3">
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
      <div className="relative h-[calc(100dvh-195px)] border-l border-r border-secondary md:h-[calc(100dvh-130px)]">
        <div className="absolute bottom-0 left-0 w-full">
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
