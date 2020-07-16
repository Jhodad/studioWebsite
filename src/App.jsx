import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Samples from "./components/Samples";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import Navbar from "./components/CustomNavbar";

class App extends Component {
  render() {
    return (
      <div>
        {/*<div className="bg-image">
        <Parallax className="bg-parallax">
          <div>HTML inside the parallax</div>
    </Parallax>*/}

        <Router>
          <Navbar />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/news" component={News} />
            <Route exact path="/samples" component={Samples} />
            <Route exact path="/offers" component={Offers} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
        {/*}  </div>*/}
      </div>
    );
  }
}

export default App;
