import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Articles from "./Articles";
import Ndguthrie from "./about/Ndguthrie";
import Shallphd from "./about/Shallphd";
import Distralite from "./projects/Distralite";
import Minotaurshoof from "./projects/Minotaurshoof";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/about/Ndguthrie" component={Ndguthrie} />
          <Route exact path="/about/Shallphd" component={Shallphd} />
          <Route exact path="/projects/Distralite" component={Distralite} />
          <Route exact path="/projects/Minotaurshoof" component={Minotaurshoof} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/articles" component={Articles} />
        </Switch>
      </div>
    );
  }
}

export default App;
