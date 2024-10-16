import Searchbar from "../Navbar/Searchbar";
import ChatCard from "./ChatCard";

const ChatList: React.FC = () => {
  return (
    <div className="h-full">
      <div className="mb-3 p-3 shadow-md">
        <h1 className="mb-3">Chats</h1>
        <Searchbar />
      </div>
      <div>
        <ChatCard />
      </div>
    </div>
  );
};

export default ChatList;
