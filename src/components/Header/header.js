import React, { Component } from "react";
import Counter from "../Counter/counter";
import Search from "../Search/search";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="div-container">
        <Counter />
        <Search />
      </div>
    );
  }
}

export default Header;
