import React from 'react';
import './../Global/App.css';
import Footer from './../Global/Footer';
import Header from './../Global/Header';
import MainMenu from './MainMenu';


export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
        currentFisher : 'Not Picked'
    }
}

  render(){
    return (
      <div  className="App">
        <Header currentFisher = {this.state.currentFisher}/>
        <MainMenu/>
        <Footer />
      </div>
     
    );
  }
}
