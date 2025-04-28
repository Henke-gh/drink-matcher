import { useState } from "react";
import useSingleDataFetch from "../../hooks/SingleFetch";
import "./NavSearch.css";

const SearchHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryTerm, setQueryTerm] = useState("");
  const { data, loading, error } = useSingleDataFetch(queryTerm);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setQueryTerm(searchTerm.trim());
  };

  const getIngredientsAndMeasurements = (drink) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = drink[`strIngredient${i}`];
      const measure = drink[`strMeasure${i}`];
      if (!ingredient) break; // Stop if no more ingredients
      ingredients.push(`${measure || ""} ${ingredient}`.trim());
    }
    return ingredients;
  };

  return (
    <header className="search-header">
      <nav className="nav-container">
        <div className="logo-container">
          <h2>Find your Cocktail</h2>
        </div>
        <div className="search-container">
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Find cocktail"
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
              aria-label="search cocktail"
            />
            <button
              type="submit"
              className="search-button"
              disabled={!searchTerm.trim()}>
              Get Drink
            </button>
          </form>
        </div>
      </nav>

      {/* Results of search */}
      {loading && <p className="loading-message">Loading...</p>}
      {error && <p className="error-message">Error: No drinks found.</p>}
      {data && !loading && !error ? (
        <div className="search-results">
          <div className="drink-card">
            <h2 className="drink-title">{data.strDrink}</h2>
            <img
              src={data.strDrinkThumb}
              alt={`Cocktail ${data.strDrink}`}
              className="drink-image"
              loading="lazy"
            />
            <div className="drink-details">
              <p className="bold">Ingredients</p>
              <ul className="ingredients-list">
                {getIngredientsAndMeasurements(data).map(
                  (ingredient, index) => (
                    <li key={index} className="ingredient-item">
                      {ingredient}
                    </li>
                  )
                )}
              </ul>
              <p className="drink-instructions">{data.strInstructions}</p>
            </div>
          </div>
        </div>
      ) : !loading && queryTerm && !data && !error ? (
        <p className="no-results">No cocktails found. Try another search!</p>
      ) : null}
    </header>
  );
};

export default SearchHeader;
