import CampingDetail from "@/app/components/detailpage/CampingDetail";
import { getCampingById } from "@/queries";
import type { Camping } from "@/typesCampings";

export const dynamicParams = true;

export default async function CampingDetailPage({ params }) {
  const camping = await getCampingById(params.id);

  if (!camping) {
    return <div className="text-center text-red-500 mt-10">Camping not found</div>;
  }

  return <CampingDetail camping={camping} />;
}

export async function generateStaticParams() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}api/v1/all-campings`);
  const data: Camping[] = await res.json();
  return data.map((camping) => ({
    id: camping.uuid.toString(),
  }));
}
