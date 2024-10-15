import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { allIcons } from "@/icons/all-icons";

const CreatePostModalCard: React.FC = () => {
  const { cancel } = allIcons;
  return (
    <Card className="relative w-11/12 max-w-xl rounded-lg p-3 shadow-lg">
      <CardHeader className="-mt-4 flex flex-row justify-between">
        <div className="flex items-center gap-3">
          <div>
            <Image
              src="https://avatars.githubusercontent.com/u/124599?v=4"
              width={55}
              height={55}
              alt="Avatar"
              className="h-[55px] w-[55px] overflow-hidden rounded-full"
            />
          </div>
          <div>
            <h1 className="text-md font-semibold md:text-xl">User Name</h1>
          </div>
        </div>
        <div>
          <div className="cursor-pointer">{cancel}</div>
        </div>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  );
};

export default CreatePostModalCard;
