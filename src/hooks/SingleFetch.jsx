import { useEffect, useState } from "react";

export default function useSingleDataFetch(drinkName) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    if (!drinkName) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url + drinkName);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result.drinks[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [drinkName]);

  return { data, loading, error };
}
// This hook fetches data from the cocktailDB by drink name
