import Image from "next/image";

const Avatar: React.FC = () => {
  return (
    <div>
      <Image
        src="https://avatars.githubusercontent.com/u/124599?v=4"
        width={36}
        height={36}
        alt="Avatar"
        className="overflow-hidden rounded-full"
      />
    </div>
  );
};

export default Avatar;
