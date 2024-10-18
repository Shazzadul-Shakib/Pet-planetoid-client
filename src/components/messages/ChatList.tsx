import Searchbar from "../Navbar/Searchbar";
import ChatCard from "./ChatCard";

const ChatList: React.FC<{ click: () => void; visible: boolean }> = ({
  click,
  visible,
}) => {
  return (
    <div
      className={`h-full w-full px-4 md:w-auto md:px-0 ${visible ? "hidden" : "block"} md:block`}
    >
      <div className="mb-3 py-3 shadow-md">
        <h1 className="mb-3 text-xl font-bold">Chats</h1>
        <Searchbar />
      </div>
      <div className="h-[calc(100dvh-195px)] overflow-y-auto px-1 md:h-[calc(100dvh-180px)]">
        <div onClick={click} className="cursor-pointer md:pointer-events-none">
          <ChatCard />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
