import { useEffect, useState } from "react";

/* this hook fetches data from the cocktailDB by ID, as many Ids as provided in selectedDrinkIDs */

export default function useDataFetch(selectedDrinkIDs) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  useEffect(() => {
    if (!selectedDrinkIDs || selectedDrinkIDs.length === 0) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          selectedDrinkIDs.map((id) =>
            fetch(url + id).then((res) => res.json())
          )
        );
        const drinks = responses.map((response) => response.drinks[0]);
        setData(drinks);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDrinkIDs]);

  return { data, loading, error };
}
