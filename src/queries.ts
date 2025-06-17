import type { Campings, Camping } from "./typesCampings";

//GET ALL CAMPINGS
export const getAllCampings = async (): Promise<Campings> => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "api/v1/campings", {
      next: {
        revalidate: 60,
      },
    });
    const data: Campings = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching campings:", error);
    throw error;
  }
};
