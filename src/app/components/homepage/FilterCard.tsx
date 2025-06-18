import Image from "next/image";
import type { SmallCardProps } from "@/typesFrontPageImages";

const FilterCard = ({ imageSrc, title }: SmallCardProps) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white hover:scale-105 transition-transform duration-300">
      <div className="h-48 w-full relative">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-xl" />
      </div>
      <div className="bg-slate-800 text-white text-center py-3">
        <p className="font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default FilterCard;
