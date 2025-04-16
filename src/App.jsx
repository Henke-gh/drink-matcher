import "./App.css";
import ActionGrid from "./components/ActionGrid/ActionGrid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
    <>
      <Header />
      <Presentation/>
      <ActionGrid />
        <Footer />
    
    </>
  );
}

export default App;
