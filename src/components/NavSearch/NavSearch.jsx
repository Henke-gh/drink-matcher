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

  return (
    <header className="search-header">
      <nav className="nav-container">
        <div className="logo-container">
          <h1>Find your Mix</h1>
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
              disabled={!searchTerm.trim()}
            >
              Go for a drink
            </button>
          </form>
        </div>
      </nav>

      {/* Results of search */}
      <div className="search-results">
        {loading && <p className="loading-message">Loading...</p>}
        {error && <p className="error-message">Error: {error.message}</p>}
        {data && !loading && !error ? (
          <div className="drink-card">
            <h2 className="drink-title">{data.strDrink}</h2>
            <img 
              src={data.strDrinkThumb} 
              alt={`Cocktail ${data.strDrink}`} 
              className="drink-image"
              loading="lazy"
            />
            <p className="drink-instructions">{data.strInstructions}</p>
          </div>
        ) : !loading && queryTerm && !data && !error ? (
          <p className="no-results">No cocktails found. Try another search!</p>
        ) : null}
      </div>
    </header>
  );
};

export default SearchHeader;