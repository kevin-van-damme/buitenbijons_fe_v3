import type { Campings, Camping } from "./typesCampings";
import { transformCampingResponse } from "./helpers";
import { transformArticleResponse, transformArticlesResponse } from "./helpers";
import { transformOwnerResponse, transformOwnersResponse } from "./helpers";
import { transformCityResponse, transformCitiesResponse } from "./helpers";
import { transformCountry, transformCountriesResponse } from "./helpers";
import type { Article, Articles } from "./typesArticles";
import type { Owner, Owners } from "./typesOwners";
import type { Cities, City } from "./typesCities";
import type { Country, Countries } from "./typesCountries";
//GET ALL CAMPINGS
export const getAllCampings = async (): Promise<Campings> => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}api/v1/all-campings`, {
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
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}api/v1/all-campings/${id}`);
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
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}api/v1/articles`, {
      next: {
        revalidate: 60,
      },
    });
    const raw = await res.json();
    const data = transformArticlesResponse(raw);
    return data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
export const getArticleById = async (id: string): Promise<Article> => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}api/v1/articles/${id}`);
    const raw = await res.json();
    const article = transformArticleResponse(raw[0]);
    return article;
  } catch (error) {
    console.error("Error fetching article:", error);
    throw error;
  }
};
export const getAllOwners = async (): Promise<Owners> => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}api/v1/owners`, {
      next: {
        revalidate: 60,
      },
    });
    const raw = await res.json();
    const owners = transformOwnersResponse(raw);
    return owners;
  } catch (error) {
    console.error("Error fetching owners:", error);
    throw error;
  }
};
export const getOwnerById = async (id: string): Promise<Owner> => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}api/v1/owners/${id}`);
    const raw = await res.json();
    const owner = transformOwnerResponse(raw[0]);
    return owner;
  } catch (error) {
    console.error("Error fetching owner:", error);
    throw error;
  }
};
export const getAllCities = async (): Promise<Cities> => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}api/v1/cities`, {
      next: {
        revalidate: 60,
      },
    });
    const raw = await res.json();
    const cities = transformCitiesResponse(raw);
    return cities;
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
};
export const getCityById = async (id: string): Promise<City> => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}api/v1/cities/${id}`);
  const raw = await res.json();
  if (!raw?.[0]) {
    console.error(`City not found in response for ID ${id}`);
    return null as any;
  }
  const city = transformCityResponse(raw[0]);
  return city;
};

export const getAllCountries = async (): Promise<Countries> => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}api/v1/countries`, {
      next: {
        revalidate: 60,
      },
    });
    const raw = await res.json();
    const countries = transformCountriesResponse(raw);
    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};
export const getCountryById = async (id: string): Promise<Country> => {
  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${apiBaseUrl}api/v1/countries/${id}`);
    const raw = await res.json();
    const country = transformCountry(raw[0]);
    return country;
  } catch (error) {
    console.error("Error fetching country:", error);
    throw error;
  }
};
