import "./CardContainer.css";
import Card from "../Card/Card";
import useMultiDataFetch from "../../hooks/MultiFetch";

export default function CardContainer({ selectedDrinkIDs }) {
  const { data: drinks, loading, error } = useMultiDataFetch(selectedDrinkIDs);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="cardContainer">
      <h1 className="drinkResultsHeader">Enjoy your drinks!</h1>
      <div className="cards">
        {drinks.map((drink, index) => (
          <Card key={index} drink={drink} className="card" />
        ))}
      </div>
    </div>
  );
}
