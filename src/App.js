import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Hook from "./hooks";
import UseState from "./hooks/useState";
import UseEffect from "./hooks/useEffect";
import CustomHooks from "./hooks/customHooks";
import UseReducer from "./hooks/useReducer";
import UseCallback from "./hooks/useCallback";
import MainConcepts from "./main-concepts";
import AdvancedGuides from "./advancedGuides";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/hooks" component={Hook} />
          <Route exact path="/useState" component={UseState} />
          <Route exact path="/useEffect" component={UseEffect} />
          <Route exact path="/useReducer" component={UseReducer} />
          <Route exact path="/useCallback" component={UseCallback} />
          <Route exact path="/customHooks" component={CustomHooks} />
          <Route exact path="/main-concepts" component={MainConcepts} />
          <Route exact path="/advanced" component={AdvancedGuides} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
