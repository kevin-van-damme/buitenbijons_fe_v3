import { useEffect, useState } from "react";
import { getCountryById } from "@/queries";
import { Country } from "@/typesCountries";
import type { AppError } from "@/typeError";

export function useCountry(target_uuid?: string) {
  const [country, setCountry] = useState<Country>();
  const [error, setError] = useState<AppError | null>(null);

  useEffect(() => {
    if (!target_uuid) return;
    const fetchCountry = async () => {
      try {
        const countryData = await getCountryById(target_uuid);
        setCountry(countryData);
      } catch (err) {
        setError({
          message: err instanceof Error ? err.message : "Unknown error",
          cause: err,
        });
      }
    };
    fetchCountry();
  }, [target_uuid]);

  return { country, error };
}
