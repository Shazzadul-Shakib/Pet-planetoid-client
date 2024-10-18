"use client";
import ChatBox from "@/components/messages/ChatBox";
import ChatList from "@/components/messages/ChatList";
import useToggle from "@/hooks/useToggle";

const Messages: React.FC = () => {
  const [isChatBoxVisible, setIsChatBoxVisible] = useToggle(false);
  console.log(isChatBoxVisible);
  return (
    <div className="flex h-[90dvh] gap-3">
      <ChatList visible={isChatBoxVisible} click={setIsChatBoxVisible} />
      <ChatBox close={setIsChatBoxVisible} visible={isChatBoxVisible} />
    </div>
  );
};

export default Messages;
