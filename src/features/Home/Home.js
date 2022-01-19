/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ShoppingBasket from './components/ShoppingBasket';
import Slider from './components/GlideSlideBar';
import NavigationMenu from './components/NavigationMenu';
import InputForm from './components/InputForm';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ListOfMenu from './components/ListOfMenu';

const Home = () => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState({ pizza: [], drinks: [], desserts: [], snacks: [] });
  const [orderInfo, setOrderInfo] = useState(0);

  return (
    <>
      <Header isHeaderLinkVisible isBackLinkVisible={false} />
      <ShoppingBasket cart={cart} total={total} />
      <Slider />
      <NavigationMenu />
      <ListOfMenu callCart={setCart} cart={cart} total={total} callTotal={setTotal} />
      <InputForm callCart={setCart} cart={cart} total={total} callTotal={setTotal} />
      <Footer />
    </>
  );
};

export default Home;
