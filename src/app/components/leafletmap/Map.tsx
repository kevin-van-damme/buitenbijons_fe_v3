"use client";
import dynamic from "next/dynamic";
import { Campings } from "@/typesCampings";
const CampingDetailMap = dynamic(() => import("../../components/leafletmap/CampingDetailMap"), {
  ssr: false,
});

const Map = ({ campings }: { campings: Campings[] }) => {
  return <CampingDetailMap camping={campings} />;
};
export default Map;
