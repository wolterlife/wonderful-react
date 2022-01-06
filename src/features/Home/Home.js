import React from 'react';
import ShoppingBasket from '../../components/ShoppingBasket';
import Slider from '../../components/GlideSlideBar';
import NavigationMenu from '../../components/NavigationMenu';
import InputForm from '../../components/InputForm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListOfMenu from '../../components/ListOfMenu/ListOfMenu';

const Home = () => {
  return (
    <>
      <Header showSignIn showBack={false} />
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
