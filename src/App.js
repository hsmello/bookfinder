import React, { Component } from 'react';
import './App.css';

import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';

import Home from './Pages/Home.js';
import BookFinder from './Pages/BookFinder.js';
import Contact from './Pages/Contact.js';
import {Route} from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  handleDrawerClick = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  handleBackdropClick = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
  
      backdrop = <Backdrop click={this.handleBackdropClick}/>;
    }

    return (
      <div>
        <Toolbar clickHandler={this.handleDrawerClick} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        
        <main>
          <p>This is where content should begin</p>  
        </main>
        <div> 
          <Route exact path="/" component={Home} />
          <Route exact path="/bookfinder" component={BookFinder} />
          <Route exact path="/contact" component={Contact} />
        </div>      
        
      </div>

    );
  }
};

export default App;
