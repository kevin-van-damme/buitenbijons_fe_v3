import Link from "next/link";
import type { Camping } from "@/typesCampings";
import Image from "next/image";
const CampingCard = ({ camping }: { camping: Camping }) => {
  return (
    <Link href={`/all-campings/${camping.uuid}`}>
      <div>
        <div>
          <Image
            src={camping.field_camping_image.url}
            width={350}
            height={250}
            alt={camping.title}
            className="w-auto h-auto aspect-[3/2] object-cover hover:scale-110 transition-all ease-in-out duration-500 rounded-2xl shadow-xl/30"
          />
        </div>
        <p className="font-bold text-xl text-center p-2">{camping.title}</p>
      </div>
    </Link>
  );
};
export default CampingCard;
