import Link from "next/link";
import type { Camping } from "@/typesCampings";
import Image from "next/image";

const CampingCard = ({ camping }: { camping: Camping }) => {
  return (
    <Link href={`/all-campings/${camping.uuid}`}>
      <div className="flex flex-col w-full h-full bg-[#1a2b3c] rounded-2xl shadow-xl overflow-hidden text-white">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={camping.field_camping_image.url}
            alt={camping.title}
            fill
            sizes="100%"
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <p className="font-bold text-xl text-center">{camping.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default CampingCard;
