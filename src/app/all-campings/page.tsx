import { getAllCampings } from "@/queries";
import { Camping, Campings } from "@/typesCampings";
import Link from "next/link";

export default async function AllCampingsPage() {
  const campings = await getAllCampings();
  console.log(campings);

  return (
    <div>
      <h1>All Campings</h1>
      <div>
        <ul>
          {campings?.data?.length > 0 ? (
            campings.data.map((camping: Camping) => (
              <Link href={`/campings/${camping.uuid[0].value}`} key={camping.nid[0].value}>
                <li>{camping.title[0].value}</li>
              </Link>
            ))
          ) : (
            <li>No campings found</li>
          )}
        </ul>
      </div>
    </div>
  );
}
