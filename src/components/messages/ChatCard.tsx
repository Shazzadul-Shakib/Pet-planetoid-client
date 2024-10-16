import Image from "next/image";

const ChatCard: React.FC = () => {
  return (
    <div className="my-1 flex items-center gap-3 rounded bg-secondary p-3">
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/124599?v=4"
          width={46}
          height={46}
          alt="Avatar"
          className="overflow-hidden rounded-full"
        />
      </div>
      <div>
        <h1 className="text-md font-semibold">User Name</h1>
        <div className="flex items-center gap-3">
          <div className="text-xs"> User: Users message</div>
          <div>
            <p className="text-xs">1h ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
