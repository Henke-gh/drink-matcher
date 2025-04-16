import "./CardContainer.css";
import Card from "../Card/Card";
import useDataFetch from "../../hooks/Fetch";

export default function CardContainer() {
  const { data: drink, loading, error } = useDataFetch("11007");
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="cardContainer">
      <h1 className="drinkResultsHeader">Enjoy your drinks!</h1>
      <Card drink={drink} />
    </div>
  );
}
