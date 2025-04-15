import { useEffect, useState } from "react";

/* useDataFetch currently only fetches 1 ID, cocktailID can't handle more ID searches at once.
save each result to an array or state, then present all data. Or we can rewrite this hook to perform multiple ID searches. */

export default function useDataFetch(drinkID) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkID;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json.drinks ? json.drinks[0] : null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [drinkID]);

  return { data, loading, error };
}

/* Usage example for the hook:

import useDataFetch from "./hooks/Fetch";
const { data: drink, loading, error } = useDataFetch("11007");
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  <h2>{drink?.strDrink}</h2>
    <p>{drink?.strInstructions}</p>
    <img src={drink?.strDrinkThumb} alt={drink?.strDrink} />
      */
