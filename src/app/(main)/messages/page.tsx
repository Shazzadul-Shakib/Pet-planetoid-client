import ChatBox from "@/components/messages/ChatBox";
import ChatList from "@/components/messages/ChatList";

const Messages: React.FC = () => {
  return (
    <div className="flex h-[90dvh] gap-3">
      <ChatList />
      <ChatBox />
    </div>
  );
};

export default Messages;
