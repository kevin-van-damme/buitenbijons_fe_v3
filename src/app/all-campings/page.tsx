import { getAllCampings } from "@/queries";
import { Camping } from "@/typesCampings";
import { transformCampingsResponse } from "@/helpers";
import CampingCard from "../components/allcampingspage/CampingCard";

export default async function AllCampingsPage() {
  const rawData = await getAllCampings();
  const campings = transformCampingsResponse(rawData);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-20">All Campings</h1>
      <div className="w-7xl mx-auto">
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 px-2">
          {campings?.data?.length > 0 ? (
            campings.data.map((camping: Camping) => (
              <li key={camping.uuid}>
                <CampingCard camping={camping} />
              </li>
            ))
          ) : (
            <li>No campings found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
