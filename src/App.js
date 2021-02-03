import logo from './logo.svg';
import React from 'react'
import './App.css';
import BoxComponent from './BoxComponent.js';
import Footer from './Footer.js'
import Header from './Header.js'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <BoxComponent />
        <Footer />
      </div>
      
    );

  }

}

export default App;
