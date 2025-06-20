import { useEffect, useState } from "react";
import { getCityById } from "@/queries";
import { City } from "@/typesCities";
import type { AppError } from "@/typeError";

export function useCity(target_uuid?: string) {
  const [city, setCity] = useState<City>();
  const [error, setError] = useState<AppError | null>(null);

  useEffect(() => {
    if (!target_uuid) return;
    const fetchCity = async () => {
      try {
        const cityData = await getCityById(target_uuid);
        setCity(cityData);
      } catch (err) {
        setError({
          message: err instanceof Error ? err.message : "Unknown error",
          cause: err,
        });
      }
    };
    fetchCity();
  }, [target_uuid]);

  return { city, error };
}
