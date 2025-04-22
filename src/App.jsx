import "./App.css";
import ActionGrid from "./components/ActionGrid/ActionGrid";
import Card from "./components/Card/Card";
import CardContainer from "./components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <CardContainer/>
      <ActionGrid />
      <Footer />
    </>
  );
}

export default App;
