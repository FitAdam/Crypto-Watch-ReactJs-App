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
      BTCdata: []
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(BTCdata => {
          this.setState({
            BTCdata:  [BTCdata.bpi],
            loading: false
          })
        })
  }

  

  render(){

    const bitcoinPrice = this.state.loading ? "Loading.. :)" : this.state.BTCdata.map(price => <BoxComponent price = {price.GBP.rate} name = {'Bitcoin Price:'} photo = {'https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png'}/>)
  
    return (
      <div className="App">
        <Header />
        {bitcoinPrice}
        <Footer />
      </div>
      
    );

  }

}

export default App;
