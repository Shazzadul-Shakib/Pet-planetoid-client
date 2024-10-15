import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { allIcons } from "@/icons/all-icons";
import { Separator } from "../ui/separator";

const PostCard: React.FC = () => {
  const { cancel, hTDots, outlinedHeart, comment } = allIcons;
  return (
    <div className="flex w-full justify-center px-2 py-2 md:px-0">
      <Card className="w-full max-w-[700px]">
        <CardHeader className="-mt-2 flex flex-row justify-between">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src="https://avatars.githubusercontent.com/u/124599?v=4"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </div>
            <div>
              <h1 className="text-md font-semibold">User Name</h1>
              <p className="text-xs">1h ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="cursor-pointer">{hTDots}</div>
            <div className="cursor-pointer">{cancel}</div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="my-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              maiores dignissimos quas, quasi dolores tempore. Autem nesciunt
              distinctio ex esse...
              <span className="cursor-pointer text-sm font-semibold hover:underline">
                Show more
              </span>
            </p>
          </div>
          <div>
            <Image
              className="mx-auto h-[350px] w-full max-w-[400px] rounded-lg object-cover object-center py-4"
              src="/cat.jpg"
              width={400}
              height={350}
              alt="Avatar"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <div className="flex w-full items-center justify-between px-2">
            <div className="text-xs text-muted-foreground">0 Likes</div>
            <div className="text-xs text-muted-foreground">0 Comments</div>
          </div>
          <Separator />
          <div className="flex w-full items-center gap-6">
            <div className="flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-md p-2 hover:bg-secondary">
              {outlinedHeart}
              <span className="font-semibold">Like</span>
            </div>
            <div className="flex flex-1 cursor-pointer items-center justify-center gap-3 rounded-md p-2 hover:bg-secondary">
              {comment}
              <span className="font-semibold">Comment</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PostCard;
