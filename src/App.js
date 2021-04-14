import React, { useState } from "react";
import Header from "./components/Header";
import GamePlay from "./components/GamePlay";
import Playing from "./components/Playing";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [userScore, setUserScore] = useState(0);
  return (
    <>
      <div className="container">
        <Header score={userScore} />
        <Switch>
          <Route path="/rock-paper-scissor">
            <Playing setUserChoice={setUserChoice} />
          </Route>
          <Route exact path="/game">
            <GamePlay
              userChoice={userChoice}
              userScore={userScore}
              setUserScore={setUserScore}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
