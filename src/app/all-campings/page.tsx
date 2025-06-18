import { getAllCampings } from "@/queries";
import { Camping } from "@/typesCampings";
import { transformCampingsResponse } from "@/helpers";
import CampingCard from "../components/allcampingspage/CampingCard";

export default async function AllCampingsPage() {
  const rawData = await getAllCampings();
  const campings = transformCampingsResponse(rawData);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center my-20">All Campings</h1>
      <div>
        <ul className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-10 px-2" id="campings">
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
