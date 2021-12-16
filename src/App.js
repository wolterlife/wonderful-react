import React from 'react';
import './normalize.scss';
// import './App.scss'; // delete this line after relocate to react
import Footer from './components/Footer';
import Slider from './components/GlideSlideBar';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import ShoppingBasket from './components/ShoppingBasket';
import InputForm from './components/InputForm';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ShoppingBasket />
        <Slider />
        <NavigationMenu />
        <InputForm />
        <Footer />
      </>
    );
  }
}

export default App;
