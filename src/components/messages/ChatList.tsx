import Searchbar from "../Navbar/Searchbar";
import ChatCard from "./ChatCard";

const ChatList: React.FC = () => {
  return (
    <div className="hidden h-full lg:block">
      <div className="mb-3 py-3 shadow-md">
        <h1 className="mb-3 text-xl font-bold">Chats</h1>
        <Searchbar />
      </div>
      <div className="h-[calc(100dvh-195px)] overflow-y-auto px-1 md:h-[calc(100dvh-180px)]">
        <ChatCard />
      </div>
    </div>
  );
};

export default ChatList;
