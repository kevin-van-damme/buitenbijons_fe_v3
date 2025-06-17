import { getCampingById } from "@/queries";
import { Camping } from "@/typesCampings";
import { transformCampingsResponse } from "@/helpers";

export default async function CampingDetailPage({ camping }: { camping: Camping }) {
  const data = await getCampingById(camping.uuid);

  console.log(data);

  if (!camping) {
    return (
      <div className="max-w-3xl mx-auto my-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Camping not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-20">
      <h1 className="text-5xl font-bold mb-8">{camping.title}</h1>
    </div>
  );
}
