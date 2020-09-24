import React, {useState} from 'react';
import './../Global/App.css';
import Footer from './../Global/Footer';
import Header from './../Global/Header';
import MainMenu from './MainMenu';

import { LiveWellDataProvider } from '../LiveWellPage/LiveWellData'

export default function App(){

    const [selectedFisher, setSelectedFisher] = useState('none picked')

    function setFisher(e){
      setSelectedFisher(e)
     }

    return (
      <LiveWellDataProvider>
      <div  className="App" >
        <Header currentFisher = {selectedFisher}/>
        <MainMenu selectedFisher = {selectedFisher} setFisher={setFisher}/>
        <Footer />
      </div>
      </LiveWellDataProvider>
    );
  }
