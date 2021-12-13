import React from 'react';
import './normalize.scss';
// import './App.scss'; // delete this line after relocate to react
import Footer from './components/Footer/Footer';
import Slider from './components/GlideSlideBar/GlideSlideBar';
import Header from './components/Header/Header';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import ShoppingBasket from './components/ShoppingBasket/ShoppingBasket';
import InputForm from './components/InputForm/InputForm';

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
