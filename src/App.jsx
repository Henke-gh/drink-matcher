import { useState } from "react";
import "./App.css";
import ActionGrid from "./components/ActionGrid/ActionGrid";

import CardContainer from "./components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import ToTop from "./components/ToTop/ToTop";
import NavSearch from "./components/NavSearch/NavSearch";


function App() {
  const [selectedDrinkIDs, setSelectedDrinkIDs] = useState([]);
  
  return (
    <>
      <Header />
      
      <Presentation />
      <ActionGrid onOccasionSelect={setSelectedDrinkIDs} />
      {selectedDrinkIDs.length > 0 && (
        <CardContainer selectedDrinkIDs={selectedDrinkIDs} />
      )}
      <NavSearch />
      <Footer />
      <ToTop />
    </>
  );
}

export default App;
