import React from 'react';
import './App.scss';
import Slider from './components/GlideSlideBar/GlideSlideBar';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <NavigationMenu />
      </div>
    );
  }
}

export default App;
