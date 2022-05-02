import CKEditor from "ckeditor4-react";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Editor VTEX</h2>
        <CKEditor data="<p>Hello from CKEditor 4 for VTEX Description!</p>" />
      </div>
    );
  }
}

export default App;
