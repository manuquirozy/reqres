import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Users from "./Pages/Users/Users";
import DeleteUsers from "./Pages/DeleteUsers/DeleteUsers";
import EditUsers from "./Pages/EditUsers/EditUsers";
import { ThemeContext, themes } from "./utils/themeContext"

function App() {
  const { theme } = useContext(ThemeContext)

  console.log({theme: themes[theme]})

  return (
      <Router>
        <div className="App" style={themes[theme]}>
          <header className="App-header">
            <Header />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Users} />
              <Route exact path="/delete/:id" component={DeleteUsers} />
              <Route exact path="/edit/:id" component={EditUsers} />
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
  );
}

export default App;
