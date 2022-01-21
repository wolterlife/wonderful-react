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
  const [orderInfo, setOrderInfo] = useState();
  const [isPopUpVisible, setPopUpVisible] = React.useState(false);

  return (
    <>
      <Header isHeaderLinkVisible isBackLinkVisible={false} />
      <ShoppingBasket
        cart={cart}
        total={total}
        isPopUpVisible={isPopUpVisible}
        callPopUp={setPopUpVisible}
      />
      <Slider />
      <NavigationMenu />
      <ListOfMenu callCart={setCart} cart={cart} total={total} callTotal={setTotal} />
      <InputForm
        isPopUpVisible={isPopUpVisible}
        callPopUp={setPopUpVisible}
        ordInfo={orderInfo}
        callOrder={setOrderInfo}
        cart={cart}
        callCart={setCart}
        total={total}
        callTotal={setTotal}
      />
      <Footer />
    </>
  );
};

export default Home;
