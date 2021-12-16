import React from 'react';
import ShoppingBasket from '../../components/ShoppingBasket';
import Slider from '../../components/GlideSlideBar';
import NavigationMenu from '../../components/NavigationMenu';
import InputForm from '../../components/InputForm';
import HeaderWithButton from '../../components/HeaderWithButton';

const Home = () => {
  return (
    <>
      <HeaderWithButton />
      <ShoppingBasket />
      <Slider />
      <NavigationMenu />
      <InputForm />
    </>
  );
};

export default Home;
