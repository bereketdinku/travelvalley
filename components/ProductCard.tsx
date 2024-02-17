import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import AmenityItem from "./AmentityItem";
import { Dumbbell, MapPin, Waves } from "lucide-react";
import { Button } from "./ui/button";

interface ProductProps {
  firstItem: {
    title: string;
    description: string;
    media: { uri: string; fileName: string }[];
  };
  item: [];
  title: string;
  description: string;
}

const ProductCard = ({ firstItem, item, title, description }: ProductProps) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="col-span-1 cursor-pointer transition hover:scale-105">
      <div className="flex gap-2 bg-background/50 border border-primary/10 rounded-lg">
        <div className="flex-1 aspect-square overflow-hidden relative w-full relative w-full h-[210px] rounded-s-lg">
          {/* Render the firstItem if available */}
          {firstItem && (
            <>
              <Image
                src={firstItem.media[0].uri}
                alt={firstItem.media[0].fileName}
                className="w-full h-full object-cover"
              />
              {/* Add your "use client" code here if needed */}
            </>
          )}
          {/* Render other items if available */}
          {item.map((mediaItem, index) => (
            <Image
              key={index}
              src={mediaItem.uri}
              alt={mediaItem.fileName}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col justify-between h-[210px] gap-1 p-1 py-2 text-sm">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="text-primary/90">
            {description.substring(0, 45)}...
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
