import React, { Component } from "react";
import Home from "../../features/home/Home";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../features/nav/navBar/NavBar";
import eventDashboard from "../../features/event/eventDashboard/eventDashboard";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Switch>
                <Route path="/events" component={eventDashboard} />
              </Switch>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
