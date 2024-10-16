const MessageCard: React.FC = () => {
  return (
    <div className="md: min-w-[200px] max-w-[300px] rounded-lg border border-secondary p-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
      <p className="text-end text-xs">1m ago</p>
    </div>
  );
};

export default MessageCard;