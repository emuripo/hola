import './styles/App.css';
import Header from './components/header';
import Dish from './components/dish';
import React,{Component} from "react";


class App extends Component{
  dish = "perritos";
  d = ["Pizza","Hambuerguesas","papas","Tincho"];
  render (){
    return (
      <div className="App">
        <Header></Header>
        <Dish ></Dish>
        <p></p>
      </div>
    );
  }
}

export default App;
