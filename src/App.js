import React, {Component} from "react";
import General from "./components/general";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: 'Testing'
    };
  }

  render() {

    return (
      
      <div>
          <General/>      
      </div>
    );
  }
}


export default App;
