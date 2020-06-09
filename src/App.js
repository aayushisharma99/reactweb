import React, {Component} from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import Menu from "./components/MenuComponent";
import './App.css';
import {DISHES} from "./shared/dishes";
{/*
function App() {
  return (
    <div >// also removed className="App"
      <header > //className="App-header" video me ye class nhi thi to over all look esa nhi
        <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand> react services</NavbarBrand>
        </div>
        </Navbar>
        <Menu/>
      </header>
       </div>
  );
}

export default App;
*/}
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }


  render(){
    return (
            <div>
                <Navbar dark color="primary">
                  <div className="container">
                    <NavbarBrand> react services</NavbarBrand>
                  </div>
                </Navbar>
                  <Menu dishes={this.state.dishes}/>
            </div>
      );
  }



}
export default App;