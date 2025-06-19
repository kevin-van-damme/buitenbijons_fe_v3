import CampingDetail from "@/app/components/detailpage/CampingDetail";
import { getCampingById } from "@/queries";
import type { Camping } from "@/typesCampings";

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

export async function generateStaticParams() {
  const res = await fetch("https://be-buitenbijons-test.ddev.site:33001/api/v1/campings", {
    next: {
      revalidate: 60,
    },
  });
  const data: Camping[] = await res.json();
  return data.map((camping: Camping) => ({
    id: camping.uuid.toString(),
  }));
}
