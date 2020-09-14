import React from 'react';
import './../Global/App.css';
import Footer from './../Global/Footer';
import Header from './../Global/Header';
import MainMenu from './MainMenu';
import LiveWell from '../LiveWellPage/LiveWell'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainMenu /> */}
      <LiveWell />
      <Footer />
    </div>
  );
}

export default App;