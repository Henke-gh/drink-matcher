import "./Card.css";

export default function Card({ drink }) {
  //loops through json response and extracts the ingredients and measures
  //if there is no measure, returns only ingredient
  //if ingredient has no value, breaks the loop
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (!ingredient) break;
    ingredients.push(`${ingredient} ${measure || ""}`.trim());
  }
  return (
    <div className="card">
      <section className="cardHeader">
        <img
          className="cocktailImage"
          src={drink?.strDrinkThumb || "./cocktail_icon.png"}
          alt={drink?.strDrink || "Drink Name"}
        />
        <h2 className="cocktailHeader">{drink?.strDrink || "Drink Name"}</h2>
      </section>
      <section className="cardContent">
        <div className="cardTextContainer">
          <p className="cardText bold">Ingredients</p>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p className="cardText">{item}</p>
              </li>
            ))}
          </ul>
          <p className="cardText bold">Instructions</p>
          <p className="cardText">{drink?.strInstructions}</p>
        </div>
      </section>
    </div>
  );
}
