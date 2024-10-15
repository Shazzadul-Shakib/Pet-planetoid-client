import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { allIcons } from "@/icons/all-icons";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const CreatePostModalCard: React.FC = () => {
  const { cancel, media } = allIcons;
  return (
    <Card className="relative min-h-[540px] w-11/12 max-w-[790px] rounded-lg p-3 shadow-lg">
      <CardHeader className="-mt-4 flex flex-row justify-between">
        <div className="flex items-center gap-6">
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
        <Textarea
          className="h-80 resize-none py-3"
          placeholder="What do you want to post about?"
        />
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <div className="flex w-full items-start px-2">
          <div className="my-2 cursor-pointer">{media}</div>
        </div>
        <Separator className="mb-3" />
        <div className="flex w-full items-center justify-end">
          <Button
            variant="secondary"
            className="text-md h-[45px] rounded-full px-6 font-semibold"
          >
            Post
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CreatePostModalCard;
