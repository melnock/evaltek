import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, withRouter} from 'react-router-dom'
import NavBar from './NavBar'
import AboutPage from "./containers/AboutPage"
import ContactPage from "./containers/ContactPage"
import ContractPage from "./containers/ContractPage"

class App extends Component {

  state={
    home: true,
  }

  componentDidMount(){
    this.props.history.push('/')
  }

  handleHeaderClick=()=>{
    this.props.history.push('/')
    window.location.reload();
  }

  handleEnterClick=(e)=>{
    console.log("Got me!")

    if (this.state.home){
      document.getElementById("home-logo").classList = "move"
      document.getElementById("welcome").classList = "move"
      console.log(e.target.classList)
      setTimeout(()=>{
        this.setState({
          home: false
        })

        this.props.history.push('/about')
      }, 2000)
    }else{
      this.setState({
        home: true
      })
      this.props.history.push('/')
    }


  }

  render() {
    return (
      <div className="App">
        {this.state.home ? null : <header className="App-header" >
          <h1 className="App-title" onClick={this.handleHeaderClick}>Evaltek, Inc.</h1>
          <h3 onClick={this.handleHeaderClick}> Placeholder Text </h3>
          <NavBar/>
        </header>}
        <div className="routes">
          <Route exact path="/" render={()=><HomePage handleEnterClick={this.handleEnterClick} home={this.state.home}/>}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route path="/contracts" component={ContractPage}/>
          <Route exact path="/about" component={AboutPage}/>
        </div>
        <footer>
          Melissa Nock 2018 | <a href="https://www.linkedin.com/in/melissa-nock">LinkedIn</a> | <a href="https://www.github.com/melnock">GitHub</a> | <a href="https://medium.com/@melnock">Medium</a>
        </footer>
      </div>
    );
  }
}

export default App;
