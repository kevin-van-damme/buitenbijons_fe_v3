import { getAllCampings } from "@/queries";
import { Camping, Campings } from "@/typesCampings";
import { transformCampingsResponse } from "@/helpers";
import CampingCard from "../components/allcampingspage/CampingCard";
import AllCampingsMap from "../components/leafletmap/AllCampingsMap";
import MultiRangeSlider from "../components/allcampingsfilter/MultiRangeSilder";
import CampingsSearchBar from "../components/allcampingsfilter/CampingsSearchBar";

export default async function AllCampingsPage() {
  const rawData = await getAllCampings();
  const campings = transformCampingsResponse(rawData);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center mt-20 mb-25 lg:mt-14 md:mt-14">
        <AllCampingsMap campings={campings} />
      </div>
      <div>
        <CampingsSearchBar />
      </div>
      <h1 className="text-5xl font-bold text-center my-10 lg:my-20 md:my-20">All Campings</h1>
      <div>
        <ul className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-10 px-2 justify-center" id="campings ">
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
