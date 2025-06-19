"use client";
import dynamic from "next/dynamic";
import type { Camping } from "@/typesCampings";
const Map = dynamic(() => import("./Map"), { ssr: false });
const CampingDetailMap = ({ camping }: { camping: Camping }) => {
  return (
    <>
      <Map camping={camping} />
    </>
  );
};
export default CampingDetailMap;
