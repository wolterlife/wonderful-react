import React from 'react';
import ShoppingBasket from './components/ShoppingBasket';
import Slider from './components/GlideSlideBar';
import NavigationMenu from './components/NavigationMenu';
import InputForm from './components/InputForm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListOfMenu from './components/ListOfMenu';

const Home = () => {
  const data = JSON.parse(localStorage.getItem('currentUser'));
  if (data != null);
  return (
    <>
      <Header isSignInVisible isBackLinkVisible={false} />
      <ShoppingBasket />
      <Slider />
      <NavigationMenu />
      <ListOfMenu />
      <InputForm />
      <Footer />
    </>
  );
};

export default Home;
