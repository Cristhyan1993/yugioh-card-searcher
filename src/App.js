import { useEffect, useState } from "react";
import React from "react";
import Card from "./Components/Card";
import "./App.css";
import Footer from "./Components/Footer";
import Instructions from "./Components/Instructions";

function App() {
  const [card, setCard] = useState("");
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=jinzo`
      );
      const data = await response.json();
      // console.log("fetch Data", data.data[0]);
      setCard(data);
    }
    getData();
  }, []);

  async function getData(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${userInput}`
      );
      const data = await response.json();
      console.log("fetch Data", data.data[0]);
      setCard(data);
      setUserInput("");
    } catch (error) {
      alert(
        `Your search '${userInput}' did not match any card. Please try again e.g 'Dark Magician `
      );
    }
  }
  // async function getData(userInput) {

  //   const response = await fetch(
  //     `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${userInput}`
  //   );
  //   const data = await response.json();
  //   console.log("fetch Data", data.data[0].name)
  //   setCard(data);
  // }

  return (
    <div className="App">
      <header>
        <img src={"./yugioh-logo.png"} alt="yugioh logo" />
      </header>
      <div className="instructions-container">
      <Instructions/>
      </div>
      <div className="form-container">
        <div className="form">
          <form>
            <input
              type="text"
              onChange={(e) => setUserInput(e.target.value)}
              id="search"
              placeholder="Jinzo"
            ></input>
            <button type="submit" onClick={getData}>
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="card-container">
        <Card card={card} />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
