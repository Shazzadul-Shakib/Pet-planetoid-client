import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { allIcons } from "@/icons/all-icons";

const ProductCard: React.FC = () => {
  const { taka } = allIcons;
  return (
    <Card className="max-h-[331px]">
      <CardContent className="relative z-0 mb-2 h-[250px] overflow-hidden rounded-t-lg">
        <Image
          src="/cat.jpg"
          fill
          quality={100}
          alt="Product"
          className="z-[-1] h-full w-full object-cover"
        />
      </CardContent>
      <CardFooter className="flex-col items-start pt-2">
        <h2 className="text-md flex items-center font-semibold">
          BDT-100{taka}
        </h2>
        <h2 className="text-md font-semibold">Product name</h2>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
