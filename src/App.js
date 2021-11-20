import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BoxesPage from "./BoxesPage";
import Gsap_Svg from "./Gsap_Svg";
import TextPage from "./TextPage";
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
         
              <Link to="/">Home</Link>
            
              <Link to="/svg">Svg</Link>
            
              <Link to="/boxes">Boxes</Link>
            
              <Link to="/text">Text</Link>
            
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/boxes">
            <BoxesPage />
          </Route>
          <Route path="/text">
            <TextPage />
          </Route>
          <Route path="/svg">
            <Gsap_Svg />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>HOME</h1>
      <p>Learning Gsap and Svg manipulation</p>
    </div>
  );
}
