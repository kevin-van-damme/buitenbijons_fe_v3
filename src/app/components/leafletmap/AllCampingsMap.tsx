"use client";
import dynamic from "next/dynamic";
import type { Campings } from "@/typesCampings";
const MapAll = dynamic(() => import("./MapAll"), { ssr: false });
const AllCampingsMap = ({ campings }: { campings: Campings[] }) => {
  return (
    <>
      <MapAll campings={campings} />
    </>
  );
};
export default AllCampingsMap;
