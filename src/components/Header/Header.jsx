import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="mainHeader">Drink Matcher</h1>
      <img src="./cocktail_icon.png" alt="cocktail" className="iconImage" />
    </header>
  );
}
