import React from 'react';
import './App.scss';
import Slider from './components/GlideSlideBar/GlideSlideBar';
import Header from './components/Header/Header';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import ShoppingBasket from './components/ShoppingBasket/ShoppingBasket';
import Footer from './components/Footer/Footer';

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
