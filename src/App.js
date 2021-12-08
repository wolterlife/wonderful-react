import React from 'react';
import './App.scss'; // delete this line after relocate to react
import { Header, ShoppingBasket, Slider, NavigationMenu, Footer } from './components/index';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ShoppingBasket />
        <Slider />
        <NavigationMenu />
        <Footer />
      </>
    );
  }
}

export default App;
