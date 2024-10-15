import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";
import Image from "next/image";
import { TCreatePostToggle } from "@/types";

const CreatePost: React.FC<TCreatePostToggle> = ({ toggle }) => {
  return (
    <div className="flex w-full justify-center px-2 py-2 md:px-0">
      <Card className="flex w-full max-w-[700px] items-center gap-6 p-3 md:p-6">
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            width={45}
            height={45}
            alt="Avatar"
            className="h-[45px] w-[45px] overflow-hidden rounded-full"
          />
        </div>
        <Button
          className="md:text-md h-10 flex-1 justify-start rounded-full pl-5 text-sm md:h-12 md:pl-10"
          variant="secondary"
          onClick={toggle}
        >
          Create a post User Name
        </Button>
      </Card>
    </div>
  );
};
export default CreatePost;
