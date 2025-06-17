import type { Campings, Camping } from "./typesCampings";

//GET ALL CAMPINGS
export const getAllCampings = async (): Promise<Campings> => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "api/v1/all-campings", {
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
export const getCampingById = async (id: string): Promise<Camping> => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + "api/v1/all-campings/" + id, {
      next: {
        revalidate: 60,
      },
    });
    const data: Camping = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching camping:", error);
    throw error;
  }
};
