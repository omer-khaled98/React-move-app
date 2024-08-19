import logo from "./logo.svg";
import "./App.css";
import Moves from "./pages/movespages/MovesPage";
import Mmm from "./pages/movespages/MovesPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import Regestrationpage from "./pages/regestration/Regestrationpage";
import NaveComponent from "./components/NaveComponent";
import MoveDetails from "./pages/MoveDetails";
import FavoritesPage from "./pages/FavPage/FavPage";
import React from "react";
import { useState } from "react";

export const LangContext = React.createContext();
// const langg = "ar";

function App() {
  const [langg, setlangg] = useState("en");
  function handleLang() {
    if (langg == "en") {
      setlangg("ar");
    } else {
      setlangg("en");
    }
  }
  return (
    <>
      <LangContext.Provider value={langg}>
        <BrowserRouter>
          <NaveComponent
            btn={
              <button
                onClick={handleLang}
                type="button"
                className="btn btn-warning  d-block m-auto "
              >
                change {langg}
              </button>
            }
          />

          <Switch>
            <Route path="/" component={Mmm} exact />
            <Route path="/home" component={Mmm} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/regestration" component={Regestrationpage} exact />
            <Route path="/favorites" component={FavoritesPage} exact />
            <Route path="/details/:id" component={MoveDetails} exact />
            <Route path="*" component={Mmm} />
          </Switch>
        </BrowserRouter>
      </LangContext.Provider>
    </>
  );
}

export default App;
