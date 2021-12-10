import React from 'react';
import './normalize.css';
// import './App.scss'; // delete this line after relocate to react
import {
  Header,
  ShoppingBasket,
  Slider,
  NavigationMenu,
  Footer,
  InputForm,
} from './components/index';

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
