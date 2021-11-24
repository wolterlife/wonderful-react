import React from 'react';
import './App.scss';
import GlideSlideBar from './components/GlideSlideBar/GlideSlideBar';
import Header from './components/Header';
import ChooseMenu from './components/ChooseMenu';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <GlideSlideBar />
        <ChooseMenu />
      </div>
    );
  }
}

export default App;
