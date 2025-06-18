import CampingDetail from "@/app/components/detailpage/CampingDetail";
import { getCampingById } from "@/queries";

type PageProps = {
  params: { id: string };
};

export default async function CampingDetailPage({ params }: PageProps) {
  const camping = await getCampingById(params.id);

  if (!camping) {
    return <div className="text-center text-red-500 mt-10">Camping not found</div>;
  }

  return <CampingDetail camping={camping} />;
}
