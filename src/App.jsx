import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="presentation">
        <h1>Welcome to the Drink Matcher</h1>
        <p>
          We are thrilled to help you celebrate the most important moments of
          your life, one sip at a time. Whether you're looking for the perfect
          drink for your victory dance or just need a little liquid courage to
          escape the harsh realities of adulthood, we've got your back. After
          all, why stress when you can have a cocktail?
        </p>
      </div>

      <Footer />
    </>
  );
}

export default App;
