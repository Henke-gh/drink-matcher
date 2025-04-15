import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <h2 className="cocktailHeader">Cocktail Name</h2>
      <section className="cardContent">
        <div className="cardTextContainer">
          <p className="cardText bold">Ingredients</p>
          <p className="cardText bold">Instructions</p>
        </div>
        <img
          src="./cocktail_icon.png"
          alt="cocktail"
          className="cocktailImage"
        />
      </section>
    </div>
  );
}
