import HeaderCard from "@/components/marketplace/HeaderCard";
import ProductCard from "@/components/marketplace/ProductCard";

const MarketPlace: React.FC = () => {
  return (
    <div className="mx-2 xl:mx-0">
      <HeaderCard />
      <div className="grid h-[calc(100dvh-200px)] grid-cols-1 gap-4 overflow-auto sm:grid-cols-2 md:h-[calc(100dvh-130px)] md:grid-cols-3 lg:grid-cols-4">
        <ProductCard />
      </div>
    </div>
  );
};

export default MarketPlace;
