import dynamic from "next/dynamic";
import type { Camping } from "@/typesCampings";
const Map = dynamic(() => import("../../components/leafletmap/CampingDetailMap"), { ssr: false });
const CampingDetailMap = ({ camping }: { camping: Camping }) => {
  return (
    <>
      <Map camping={camping} />
    </>
  );
};
export default CampingDetailMap;
