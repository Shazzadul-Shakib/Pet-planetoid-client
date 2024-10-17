import Image from "next/image";

const MessageCard: React.FC = () => {
  return (
    <div className="max-w-[300px] rounded-lg border border-secondary p-4 md:min-w-[200px] md:max-w-[400px]">
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p> */}
      <div className="relative h-[150px] min-w-[200px] md:min-w-[300px]">
        <Image
          src="/portfolio.png"
          fill
          alt="Shared picture"
          className=" object-contain"
          quality={100}
        />
      </div>
      <p className="text-end text-xs pt-2">1m ago</p>
    </div>
  );
};

export default MessageCard;
