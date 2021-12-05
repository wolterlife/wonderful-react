import React from 'react';
import './App.scss';
import { Header, ShoppingBasket, Slider, NavigationMenu, Footer } from './components/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ShoppingBasket />
        <Slider />
        <NavigationMenu />
        <Footer />
      </div>
    );
  }
}

export default App;
