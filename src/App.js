import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
