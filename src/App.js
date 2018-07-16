import React, { Component } from 'react';
import logo from './evaltek_logo.png';
import './App.css';
import {Route, withRouter} from 'react-router-dom'
import NavBar from './NavBar'
import HomePage from "./containers/HomePage"
import AboutPage from "./containers/AboutPage"
import ContractPage from "./containers/ContractPage"

class App extends Component {

  state={
    home: null,
  }

  componentDidMount(){
    this.props.history.push('/')
  }

  handleHeaderClick=()=>{
    this.props.history.push('/')
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <img src={logo} alt="logo" className="logo"/>
          <NavBar/>
        </header>
        <div className="routes">
          <Route exact path="/" render={()=><HomePage handleEnterClick={this.handleEnterClick} home={this.state.home}/>}/>
          <Route path="/contracts" component={ContractPage}/>
          <Route exact path="/about" component={AboutPage}/>
        </div>
        <footer>
          Evaltek, Inc. 2018
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
