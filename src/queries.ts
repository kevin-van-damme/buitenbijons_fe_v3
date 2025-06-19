import type { Campings, Camping } from "./typesCampings";
import { transformCampingResponse } from "./helpers";
import { Article, Articles } from "./typesArticles";
import { Owner, Owners } from "./typesOwners";
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
export const getCampingById = async (id: string): Promise<Camping | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/all-campings/${id}`);
    if (!res.ok) throw new Error("Failed to fetch camping");
    const raw = await res.json();
    const camping = transformCampingResponse(raw[0]);
    return camping;
  } catch (error) {
    console.error("Error fetching camping:", error);
    return null;
  }
};

export const getAllArticles = async (): Promise<Articles> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/articles`, {
      next: {
        revalidate: 60,
      },
    });
    const data: Articles = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
export const getArticleById = async (id: string): Promise<Article> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/articles/${id}`);
    const data: Article = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};
export const getAllOwners = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/owners`, {
    next: {
      revalidate: 60,
    },
  });
  const data: Owner = await res.json();
  try {
  } catch (error) {
    console.error("Error fetching owners:", error);
    throw error;
  }
};
