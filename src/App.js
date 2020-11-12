import React from "react"
import './App.css';
import Header from './Components/Header/Header';
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";
import TinderCards from "./Components/TinderCards/TinderCards";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <TinderCards></TinderCards>
      <SwipeButtons></SwipeButtons>
    </div>
  );
}

export default App;
