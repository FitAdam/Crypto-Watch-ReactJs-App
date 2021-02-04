import logo from './logo.svg';
import React from 'react'
import './App.css';
import BoxComponent from './BoxComponent.js';
import Footer from './Footer.js'
import Header from './Header.js'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      data: []
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(data => {
          this.setState({
            data:  [data.bpi],
            loading: false
          })
        })
  }

  

  render(){

    const price = this.state.loading ? "Loading.. :)" : this.state.data.map(price => <p>£{price.GBP.rate}</p>)
  
    return (
      <div className="App">
        <Header />
        {price}
        <Footer />
      </div>
      
    );

  }

}

export default App;
